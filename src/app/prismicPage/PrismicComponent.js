import React from 'react';

function PrismicComponent ({ cmsContent }) {
  console.log(888, cmsContent)
  return (
    <div>
      {/*{JSON.stringify(cmsContent[0].data)}*/}

      <h1>{cmsContent[0].data.title[0].text}</h1>
      <div>{cmsContent[0].data.about[0].text}</div>
    </div>
  )
}

export default PrismicComponent;