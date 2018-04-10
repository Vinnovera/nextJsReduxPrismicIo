import React from 'react';
import RedditContainer from './RedditContainer';

function HomeComponent ({
                          currentCount,
                          onIncrementClick,
                          onDecrementClick
                        }) {
  return (
    <div>
      <p>Current count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
      <RedditContainer/>
    </div>
  )
}

export default HomeComponent;