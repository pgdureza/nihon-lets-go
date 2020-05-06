import React from 'react'
import NavItem from './NavItem'

const Nav = () => {
  return (
    <div className="text-white absolute top-0 flex w-full text-sm">
      <NavItem path="/kana?type=hiragana">Hiragana</NavItem>
      <NavItem path="/kana?type=katakana">Katakana</NavItem>
      <NavItem path="/vocabulary">Vocabulary</NavItem>
    </div>
  )
}

export default Nav
