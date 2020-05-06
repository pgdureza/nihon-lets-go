import React from 'react'
import { useRouter } from 'next/router'
import Loading from './Loading'
import { randomizeKana } from '../utils'

const DataContext = React.createContext(null)

const DataProvider = ({ children }) => {
  const [data, setData] = React.useState({})
  const [items, setItems] = React.useState(null)
  const [type, setType] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/root`)
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  React.useEffect(() => {
    if (type && data[type]) {
      setItems(randomizeKana(data[type]))
    }
  }, [type, data])

  return <DataContext.Provider value={{ type, items, setType }}>{children}</DataContext.Provider>
}

export { DataContext, DataProvider }
