import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center text-crimson-500 text-6xl">
      <div className="spinner">
        <AiOutlineLoading3Quarters />
      </div>
    </div>
  )
}

export default Loading
