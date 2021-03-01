import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

import { Page } from '@components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tesla</title>
      </Head>

      <main>
        <Page />
      </main>
    </>
  )
}

export default Home
