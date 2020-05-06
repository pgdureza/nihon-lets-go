import React from 'react'

const Answer = ({ children }) => {
  return (
    <div className="w-full p-12 h-pull flex items-center justify-center absolute">
      <div className={`text-white font-bold text-center text-white`}>{children}</div>
    </div>
  )
}

export default Answer
