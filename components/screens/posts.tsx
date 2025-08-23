import type { Post } from '@/types'

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
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <div>
          <h1 className="font-semibold text-3xl">{post.title}</h1>
        </div>
        <div className="mt-1 flex gap-2 text-base text-gray-11">
          <PublishedTime />
        </div>
      </div>
      <div>
        <MDX source={post.content} />
      </div>
    </div>
  )
}
