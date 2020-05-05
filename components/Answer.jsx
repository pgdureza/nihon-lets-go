import React from 'react'
import { MenuControlsContext } from './MenuControls'

const Answer = () => {
  const { character } = React.useContext(MenuControlsContext)
  return (
    <div className="w-full p-12 h-pull flex items-center justify-center absolute">
      <div className="text-white text-6xl font-bold text-center text-white w-32">
        {character.romanji}
      </div>
    </div>
  )
}

export default Answer
