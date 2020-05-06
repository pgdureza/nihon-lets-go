import React from 'react'
import Head from 'next/head'

import '../styles/index.css'
import { DataProvider } from '../components/Data'
import { MenuControlsProvider } from '../components/MenuControls'

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Tek's Nihongo Reviewer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <DataProvider>
        <MenuControlsProvider>
          <Component {...pageProps} />
        </MenuControlsProvider>
      </DataProvider>
    </div>
  )
}

export default App
