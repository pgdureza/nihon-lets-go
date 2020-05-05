import React from 'react'

const Stamp = ({ children }) => {
  return (
    <div className="bg-black w-full p-12 h-pull flex items-center shadow-2xl relative justify-center">
      <div className="stamp text-crimson-500 text-6xl font-bold text-center text-white px-8 py-4 border-double border-crimson-500 border-8 rounded-lg outline-none">
        {children}
      </div>
      <div className="stamp absolute bottom-0 left-0 w-full bg-crimson-500 h-xs mb-1"></div>
      <div className="stamp absolute bottom-0 left-0 w-full bg-crimson-500 h-xs"></div>
    </div>
  )
}

export default Stamp
