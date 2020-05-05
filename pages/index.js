import React from 'react'
import Router from 'next/router'

const Home = () => {
  React.useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/kana?type=hiragana')
    }
  })

  return null
}

export default Home
