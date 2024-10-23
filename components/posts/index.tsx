import { formatter } from '@/lib/formatter'
import { getPosts } from '@/lib/mdx'

import { Link as NextViewTransition } from 'next-view-transitions'
import React from 'react'

interface PostProps {
  category: string
}

export const Posts = ({ category }: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const Seperator = () => <div className="border-border border-t" />

  if (posts.length === 0) {
    return null
  }

  return (
    <div className="mt-6 flex flex-col">
      <NextViewTransition href={`/${category}`} className="flex justify-between">
        <h2 className="py-2 text-muted capitalize">
          {category} {posts.length > 0 && `(${posts.length})`}
        </h2>
      </NextViewTransition>

      {posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <Seperator />
            <NextViewTransition href={`/${category}/${post.slug}`} className="flex w-full justify-between py-2">
              <p>{post.title}</p>
              <p className="mb-0 text-muted slashed-zero tabular-nums">{formatter.date(new Date(post.date))}</p>
            </NextViewTransition>
          </React.Fragment>
        )
      })}
    </div>
  )
}
