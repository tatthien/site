import { Card } from '@/components/card'
import { Posts } from '@/components/posts'
import { OpenGraph } from '@/lib/og'

const category = 'pages'

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
    <Card>
      <Posts category={category} />
    </Card>
  )
}
