import React from 'react';

function GalleryComponent ({
                             currentCount,
                             onIncrementClick,
                             onDecrementClick
                           }) {
  return (
    <div>
      <p>Current count: {currentCount}</p>
      <button onClick={onIncrementClick}>Increment</button>
      <button onClick={onDecrementClick}>Decrement</button>
    </div>
  )
}

export default GalleryComponent;