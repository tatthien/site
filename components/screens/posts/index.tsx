import type { Post } from '@/types'

import { Breadcrumb } from '@/components/breadcrumb'
import { Card } from '@/components/card'
import { PostNavigation } from '@/components/post-navigation'
import { TableOfContents } from '@/components/table-of-contents'
import { formatter } from '@/lib/formatter'
import { getPosts } from '@/lib/mdx'
import { MDX } from '@/mdx-components'
import { readingTime } from 'reading-time-estimator'

interface Props {
  post: Post
  route: string
}

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route)

  const Seperator = () => {
    return <div>⋅</div>
  }

  const PublishedTime = () => {
    return <div>{formatter.date(new Date(post.date))}</div>
  }

  const ReadingTime = () => {
    return <div>{readingTime(post.content).minutes} minutes read</div>
  }

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb post={post} />
      <Card>
        <div className="mb-10 flex flex-col">
          <div>
            <h1 className="text-2xl">{post.title}</h1>
          </div>
          <div className="mt-1 flex gap-2 text-gray-9 text-sm">
            <PublishedTime />
            <Seperator />
            <ReadingTime />
          </div>
        </div>
        <MDX source={post.content} />
      </Card>
      <PostNavigation posts={posts} />
      <TableOfContents />
    </div>
  )
}
