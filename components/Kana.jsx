import React from 'react'
import { MenuControlsContext } from './MenuControls'
import Pulldown from './Pulldown'
import Answer from './Answer'
import Nav from './Nav'
import Menu from './Menu'
import Stamp from './Stamp'

const Kana = () => {
  const { show, character } = React.useContext(MenuControlsContext)
  return (
    <div className="relative h-screen w-screen">
      <Answer>
        <span className="text-4xl uppercase">{character.romanji}</span>
      </Answer>
      <Pulldown show={show}>
        <Stamp key={character.romanji}>
          <span className="text-6xl">{character.kana}</span>
        </Stamp>
      </Pulldown>
      <Nav />
      <Menu />
    </div>
  )
}

export default Kana
