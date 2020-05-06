import React from 'react'
import { MenuControlsContext } from './MenuControls'
import Pulldown from './Pulldown'
import Answer from './Answer'
import Nav from './Nav'
import Menu from './Menu'
import Stamp from './Stamp'

const Vocabulary = () => {
  const { show, character } = React.useContext(MenuControlsContext)
  return (
    <div className="relative h-screen w-screen">
      <Answer>
        <div className="text-3xl uppercase">{character.romanji}</div>
        <div className="text-xl text-crimson-500 lowercase">{character.meaning}</div>
      </Answer>
      <Pulldown show={show}>
        <Stamp key={character.romanji}>
          <span className="text-4xl">{character.kana}</span>
        </Stamp>
      </Pulldown>
      <Nav />
      <Menu />
    </div>
  )
}

export default Vocabulary
