import React from 'react'
import { MenuControlsContext } from './MenuControls'
import Stamp from './Stamp'

const Pulldown = () => {
  const { show, character } = React.useContext(MenuControlsContext)
  return (
    <div
      className={`pulldown absolute w-screen transform ${
        show ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <Stamp>{character.kana}</Stamp>
    </div>
  )
}

export default Pulldown
