import React from 'react'
import Router from 'next/router'

export default () => {
  React.useEffect(() => {
    const { pathname } = Router
    if (pathname == '/') {
      Router.push('/kana')
    }
  })

  return null
}
