import type { Post } from '@/types'

import { Card } from '@/components/card'
import { formatter } from '@/lib/formatter'
import { MDX } from '@/mdx-components'

interface Props {
  post: Post
}

export const Layout = ({ post }: Props) => {
  const PublishedTime = () => {
    return <div>{formatter.date(new Date(post.date))}</div>
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <div className="mb-10 flex flex-col">
          <div>
            <h1 className="text-3xl">{post.title}</h1>
          </div>
          <div className="mt-1 flex gap-2 text-gray-9 text-sm">
            <PublishedTime />
          </div>
        </div>
        <MDX source={post.content} />
      </Card>
    </div>
  )
}
