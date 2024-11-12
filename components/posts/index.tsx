import { formatter } from '@/lib/formatter'
import { getPosts } from '@/lib/mdx'

import Link from 'next/link'
import React from 'react'

import { Seperator } from '../separator'
import type { Post } from '@/types'

interface PostProps {
  /* Post type */
  category: string

  /* Limit the number of posts */
  limit?: number

  /* Wheather the posts should be grouped by year */
  group?: boolean
}

export const Posts = ({ category, limit, group }: PostProps) => {
  const posts = getPosts(category)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, limit)

  if (!group) {
    return <PostList posts={posts} category={category} />
  }

  const groupedPosts = posts.reduce<Record<string, Post[]>>((acc, post) => {
    const year = post.date.getFullYear()

    if (!acc[year]) {
      acc[year] = [post]
    } else {
      acc[year].push(post)
    }

    return acc
  }, {})

  if (posts.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col gap-7">
      {Object.keys(groupedPosts).reverse().map((year) => (
        <div key={year}>
          <div className='text-gray-9'>{year}</div>
          <div>
            <PostList posts={groupedPosts[year]} category={category} />
          </div>
        </div>
      ))}
    </div>
  )
}

const PostList = ({ posts, category }: { posts: Post[], category: string }) => {
  return (
    posts.map((post, index) => (
      <React.Fragment key={post.slug}>
        <Link href={`/${category}/${post.slug}`} prefetch={true} className="flex w-full flex-wrap justify-between py-2 md:flex-nowrap">
          <p className="w-full flex-grow md:w-auto md:flex-auto">{post.title}</p>
          <p className="mb-0 text-gray-9 slashed-zero tabular-nums">{formatter.date(new Date(post.date))}</p>
        </Link>
        {index < posts.length - 1 && <Seperator />}
      </React.Fragment>
    ))
  )
}
