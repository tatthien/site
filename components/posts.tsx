import type { Post } from '@/types'

import { getPosts } from '@/lib/mdx'

import Link from 'next/link'

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
      {Object.keys(groupedPosts)
        .reverse()
        .map((year) => (
          <div key={year}>
            <div className="font-semibold">{year}</div>
            <div>
              <PostList posts={groupedPosts[year]} category={category} />
            </div>
          </div>
        ))}
    </div>
  )
}

const PostList = ({ posts, category }: { posts: Post[]; category: string }) => {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link key={post.slug} href={`/${category}/${post.slug}`} prefetch={true} className="block">
          <article className="flex w-full flex-wrap md:gap-2">
            <h2 className="mb-0 w-full flex-grow font-normal md:w-auto md:flex-auto">{post.title}</h2>
          </article>
        </Link>
      ))}
    </div>
  )
}
