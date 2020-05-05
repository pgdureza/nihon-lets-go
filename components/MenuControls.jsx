import React from 'react'
import { KanaContext } from './Kana'

const MenuControlsContext = React.createContext({})

const MenuControlsProvider = ({ children }) => {
  const [show, setShow] = React.useState(false)
  const [characterIndex, setCharacterIndex] = React.useState(0)
  const { kanaSet } = React.useContext(KanaContext)

  const showAnswer = (e) => {
    e.preventDefault()
    setShow(true)
  }
  const hideAnswer = (e) => {
    e.preventDefault()
    setShow(false)
  }

  const next = () => {
    if (characterIndex < kanaSet.length - 1) {
      setCharacterIndex(characterIndex + 1)
    } else {
      setCharacterIndex(0)
    }
  }

  const prev = () => {
    if (characterIndex <= 0) {
      setCharacterIndex(kanaSet.length - 1)
    } else {
      setCharacterIndex(characterIndex - 1)
    }
  }

  const character = kanaSet[characterIndex] || {}
  return (
    <MenuControlsContext.Provider value={{ character, show, showAnswer, hideAnswer, next, prev }}>
      {children}
    </MenuControlsContext.Provider>
  )
}

export { MenuControlsProvider, MenuControlsContext }
