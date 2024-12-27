import { Card } from '@/components/card'
import { Posts } from '@/components/posts'
import { OpenGraph } from '@/lib/og'

const category = 'w'

export function generateMetadata() {
  const image = `/api/og?title=${encodeURIComponent(category)}`

  return {
    ...OpenGraph,
    category,
    openGraph: {
      title: category,
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
    twitter: {
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
  }
}

export default function Page() {
  return (
    <Card>
      <Posts category={category} group />
    </Card>
  )
}
