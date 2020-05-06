import React from 'react'
import { flipInY } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const Animated = styled.div`
  animation: 1s ${keyframes`${flipInY}`};
`

const Stamp = ({ children }) => {
  return (
    <div className="bg-black w-full p-2 h-pull flex items-center shadow-2xl relative justify-center">
      <Animated
        key="children"
        className={`stamp text-crimson-500  font-bold text-center text-white px-8 py-4 border-double border-crimson-500 border-8 rounded-lg outline-none`}
      >
        {children}
      </Animated>
      <div className="stamp absolute bottom-0 left-0 w-full bg-crimson-500 h-xs mb-1"></div>
      <div className="stamp absolute bottom-0 left-0 w-full bg-crimson-500 h-xs"></div>
    </div>
  )
}

export default Stamp
