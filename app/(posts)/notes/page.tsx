import * as FadeIn from '@/components/motion/staggers/fade'
import { Posts } from '@/components/posts'
import { OpenGraph } from '@/lib/og'

import React from 'react'

const category = 'notes'

export function generateMetadata() {
  const image = `/api/og?title=${encodeURIComponent(category)}`

  return {
    ...OpenGraph,
    category,
    openGraph: {
      title: category,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  }
}

export default function Page() {
  return (
    <React.Fragment>
      <FadeIn.Item>
        <Posts category={category} />
      </FadeIn.Item>
    </React.Fragment>
  )
}
