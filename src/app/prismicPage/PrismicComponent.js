import React from 'react'
import Image from '../_global/components/PrismicImage'
import Link from '../_global/components/PrismicLink'
import RichText from '../_global/components/PrismicRichText'
import Title from '../_global/components/PrismicTitle'

function PrismicComponent ({ cmsContent }) {
  return (
    cmsContent && <div>
      {/* {JSON.stringify(cmsContent.data)} */}

      <Title data={cmsContent.data.page_title} />
      <Image document={cmsContent} apiId='top_image' />
      <RichText data={cmsContent.data.main_text} />
      <Link data={cmsContent.data.link} text='länktext' />
    </div>
  )
}

export default PrismicComponent
