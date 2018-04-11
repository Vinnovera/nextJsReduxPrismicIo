import React from 'react';

function PrismicComponent ({ cmsContent }) {
  return (
    <div>
      {/*{JSON.stringify(cmsContent.data)}*/}

      <h1>{cmsContent.data.title[0].text}</h1>
      <div>{cmsContent.data.description[0].text}</div>
    </div>
  )
}

export default PrismicComponent;