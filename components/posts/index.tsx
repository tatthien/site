import { formatter } from '@/lib/formatter'
import { getPosts } from '@/lib/mdx'

import Link from 'next/link'
import React from 'react'

interface PostProps {
  category: string
  limit?: number
}

export const Posts = ({ category, limit = -1 }: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const Seperator = () => <div className="border-border border-t" />

  if (posts.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col">
      <Link href={`/${category}`} prefetch={true} className="flex justify-between">
        <h2 className="py-2 text-gray-9 capitalize">
          {category} {posts.length > 0 && `(${posts.length})`}
        </h2>
      </Link>

      {posts.slice(0, limit).map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <Seperator />
            <Link href={`/${category}/${post.slug}`} prefetch={true} className="flex flex-wrap md:flex-nowrap w-full justify-between py-2">
              <p className="flex-grow w-full md:flex-auto md:w-auto">{post.title}</p>
              <p className="mb-0 text-gray-9 slashed-zero tabular-nums">{formatter.date(new Date(post.date))}</p>
            </Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}
