import { formatter } from '@/lib/formatter'
import { getPosts } from '@/lib/mdx'

import Link from 'next/link'
import React from 'react'
import { Seperator } from '../separator'

interface PostProps {
  category: string
  limit?: number
}

export const Posts = ({ category, limit }: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  }).slice(0, limit)

  if (posts.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col">
      {posts.map((post, index) => {
        return (
          <React.Fragment key={post.slug}>
            <Link href={`/${category}/${post.slug}`} prefetch={true} className="flex w-full flex-wrap justify-between py-2 md:flex-nowrap">
              <p className="w-full flex-grow md:w-auto md:flex-auto">{post.title}</p>
              <p className="mb-0 text-gray-9 slashed-zero tabular-nums">{formatter.date(new Date(post.date))}</p>
            </Link>
            {index < posts.length - 1 && <Seperator />}
          </React.Fragment>
        )
      })}
    </div>
  )
}
