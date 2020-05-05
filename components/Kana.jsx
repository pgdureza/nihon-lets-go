import React, { useContext } from 'react'
import { ControlsContext } from './Controls'

const Kana = () => {
  const { show, character } = useContext(ControlsContext)
  return (
    <div
      className={`pulldown absolute w-screen transform ${
        show ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="bg-black w-full p-12 h-pull flex items-center shadow-2xl relative justify-center">
        <div className="stamp text-crimson-500 text-6xl font-bold text-center text-white w-32 border-double border-crimson-500 border-8 rounded-lg">
          {character.kana}
        </div>
        <div className="stamp absolute bottom-0 left-0 w-full bg-crimson-500 h-xs mb-1"></div>
        <div className="stamp absolute bottom-0 left-0 w-full bg-crimson-500 h-xs"></div>
      </div>
    </div>
  )
}

export default Kana
