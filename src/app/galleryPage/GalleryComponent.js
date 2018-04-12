import React from 'react'
import Head from 'next/head'

function GalleryComponent ({
  currentCount,
  onIncrementClick,
  onDecrementClick
}) {
  return (
    <div>
      <Head>
        <title>Gallery page title</title>
      </Head>

      <p>Current count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>

      <p>
        Example of env cav available both on client and server:
        process.env.SOME_ENV_VAR = {process.env.SOME_ENV_VAR}
      </p>
    </div>
  )
}

export default GalleryComponent
