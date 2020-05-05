import React, { useState, useEffect } from 'react'
import Loading from './Loading'

const ControlsContext = React.createContext({
  show: false,
  character: null,
  romanji: null,
  showAnswer: null,
  hideAnswer: null,
  next: null,
  prev: null,
  filters: '',
})

const ControlsProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const [characterIndex, setCharacterIndex] = useState(0)

  const [filters, setFilters] = useState(['vowels'])

  const [data, setData] = useState([])

  useEffect(async () => {
    const rawdata = await fetch(
      `http://localhost:3000/api/kana/hiragana?filter=${filters.join(',')}`,
    )
    const json = await rawdata.json()
    setData(json)
  }, [])

  const showAnswer = (e) => {
    e.preventDefault()
    setShow(true)
  }
  const hideAnswer = (e) => {
    e.preventDefault()
    setShow(false)
  }

  if (!data) {
    return <Loading />
  }

  const next = () => {
    if (characterIndex < data.length - 1) {
      setCharacterIndex(characterIndex + 1)
    } else {
      setCharacterIndex(0)
    }
  }

  const prev = () => {
    if (characterIndex <= 0) {
      setCharacterIndex(data.length - 1)
    } else {
      setCharacterIndex(characterIndex - 1)
    }
  }

  const character = data[characterIndex] || {}
  return (
    <ControlsContext.Provider value={{ character, show, showAnswer, hideAnswer, next, prev }}>
      {children}
    </ControlsContext.Provider>
  )
}

export { ControlsProvider, ControlsContext }
