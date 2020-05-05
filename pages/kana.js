import React from 'react'
import Answer from '../components/Answer'
import { MenuControlsProvider } from '../components/MenuControls'
import Menu from '../components/Menu'
import { KanaProvider } from '../components/Kana'
import Pulldown from '../components/Pulldown'
import Nav from '../components/Nav'

const Kana = () => {
  return (
    <KanaProvider>
      <MenuControlsProvider>
        <div className="relative h-screen w-screen">
          <Answer />
          <Pulldown />
          <Nav />
          <Menu />
        </div>
      </MenuControlsProvider>
    </KanaProvider>
  )
}

export default Kana
