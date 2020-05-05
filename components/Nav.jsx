import React from 'react'
import NavItem from './NavItem'

const Nav = () => {
  return (
    <div className="text-white absolute top-0 flex w-full">
      <NavItem path="/kana">Hiragana</NavItem>
      <NavItem path="/kana?type=katakana">Katakana</NavItem>
    </div>
  )
}

export default Nav
