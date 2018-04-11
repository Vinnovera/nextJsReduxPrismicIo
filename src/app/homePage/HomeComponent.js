import React from 'react'
import RedditContainer from './RedditContainer'
import css from './style.css'

function HomeComponent ({
  currentCount,
  onIncrementClick,
  onDecrementClick
}) {
  return (
    <main>
      <p className={css.example}>Current count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <RedditContainer />
    </main>
  )
}

export default HomeComponent
