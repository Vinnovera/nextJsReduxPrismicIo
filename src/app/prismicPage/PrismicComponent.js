import React from 'react';
import RichText from '../_global/components/RichText'
import Title from '../_global/components/Title'

function PrismicComponent ({ cmsContent }) {
  return (
    <div>
      {/*{JSON.stringify(cmsContent.data)}*/}

      <Title text={cmsContent.data.title}/>
      <RichText text={cmsContent.data.description}/>
    </div>
  )
}

export default PrismicComponent;