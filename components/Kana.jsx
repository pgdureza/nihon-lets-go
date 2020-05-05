import React from 'react'
import { useRouter } from 'next/router'
import Loading from './Loading'
import { randomizeKana } from '../utils'

const KanaContext = React.createContext(null)

const KanaProvider = ({ children }) => {
  const router = useRouter()
  const params = router.asPath.split(/\?/)[1]
  const type = (params && params.split('=')[1]) || 'hiragana'

  const [data, setData] = React.useState({})
  const kanaSet = data[type]

  React.useEffect(() => {
    if (!kanaSet) {
      fetch(`/api/kana/${type}`)
        .then((response) => response.json())
        .then((json) => setData({ ...data, [type]: randomizeKana(json) }))
    }
  }, [type])

  if (!kanaSet) {
    return <Loading />
  }

  return (
    <KanaContext.Provider value={{ currentKana: type, kanaSet }}>{children}</KanaContext.Provider>
  )
}

export { KanaContext, KanaProvider }
