import React from 'react'
import Stamp from './Stamp'

const Pulldown = ({ show, children }) => {
  return (
    <div
      className={`pulldown absolute w-screen transform ${
        show ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {children}
    </div>
  )
}

export default Pulldown
