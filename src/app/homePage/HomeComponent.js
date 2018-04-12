import React from 'react'
import Head from 'next/head'

import RedditContainer from './RedditContainer'
import css from './style.css'

function HomeComponent ({
  currentCount,
  onIncrementClick,
  onDecrementClick
}) {
  return (
    <main>
      <Head>
        <title>Home page title</title>
      </Head>

      <p className={css.example}>Current count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <RedditContainer />
    </main>
  )
}

export default HomeComponent
