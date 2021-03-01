import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React JS Config</title>
      </Head>

      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          flexDirection: 'column'
        }}
      >
        <h1>Default Config</h1>
        <p style={{ marginTop: 20 }}>
          This is a default config using Next.js + Styled Components +
          Typescript
        </p>
      </main>
    </>
  )
}

export default Home
