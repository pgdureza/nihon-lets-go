import React from 'react'
import { DataContext } from './Data'

const MenuControlsContext = React.createContext({})

const MenuControlsProvider = ({ children }) => {
  const [show, setShow] = React.useState(false)
  const [characterIndex, setCharacterIndex] = React.useState(0)
  const { items } = React.useContext(DataContext)

  const showAnswer = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShow(true)
    return false
  }
  const hideAnswer = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShow(false)
    return false
  }

  const next = () => {
    if (characterIndex < items.length - 1) {
      setCharacterIndex(characterIndex + 1)
    } else {
      setCharacterIndex(0)
    }
  }

  const prev = () => {
    if (characterIndex <= 0) {
      setCharacterIndex(items.length - 1)
    } else {
      setCharacterIndex(characterIndex - 1)
    }
  }

  const character = (items && items[characterIndex]) || {}
  return (
    <MenuControlsContext.Provider value={{ character, show, showAnswer, hideAnswer, next, prev }}>
      {children}
    </MenuControlsContext.Provider>
  )
}

export { MenuControlsProvider, MenuControlsContext }
