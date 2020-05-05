import React from 'react'
import Kana from '../components/Kana'
import Answer from '../components/Answer'
import { ControlsProvider } from '../components/Controls'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <ControlsProvider>
      <div className="relative h-screen w-screen">
        <Answer />
        <Kana />
        <Menu />
      </div>
    </ControlsProvider>
  )
}

export default Home
