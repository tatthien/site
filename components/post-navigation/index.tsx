'use client'

import type { Post } from '@/types/post/index'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface PostNavigationProps {
  posts: Array<Post>
}

function PostNavigation({ posts }: PostNavigationProps) {
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const currentSlug = usePathname().split('/').pop()
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug)
  const previous = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null

  if (!previous && !next) {
    return null
  }

  return (
    <div className="flex w-full justify-between">
      {previous && (
        <Link href={`${previous.slug}`} prefetch={true} className="flex w-full flex-col gap-0.5 text-left">
          <span className="text-gray-9 text-sm">Previous</span>
          <span>{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link href={`${next.slug}`} prefetch={true} className="flex w-full flex-col gap-0.5 text-right">
          <span className="text-gray-9 text-sm">Next</span>
          <span>{next.title}</span>
        </Link>
      )}
    </div>
  )
}

export { PostNavigation }
