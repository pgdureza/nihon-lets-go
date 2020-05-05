import React from 'react'
import { MenuControlsContext } from './MenuControls'
import { AiFillEye, AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

const Menu = () => {
  const { showAnswer, hideAnswer, show, next, prev } = React.useContext(MenuControlsContext)
  return (
    <div className="absolute bottom-0 w-full text-white text-4xl flex justify-center items-center h-24">
      <div className="w-1/3 flex justify-center">
        <AiFillCaretLeft onClick={prev} />
      </div>
      <div className={`w-1/3 flex justify-center ${show ? 'text-crimson-500' : ''}`}>
        <AiFillEye
          onMouseDown={showAnswer}
          onMouseUp={hideAnswer}
          onTouchStart={showAnswer}
          onTouchEnd={hideAnswer}
        />
      </div>
      <div className="w-1/3 flex justify-center">
        <AiFillCaretRight onClick={next} />
      </div>
    </div>
  )
}

export default Menu
