import type { Post } from '@/types'

import { Layout } from '@/components/screens/posts'
import { formatter } from '@/lib/formatter'
import { getPosts } from '@/lib/mdx'
import { OpenGraph } from '@/lib/og'

import { notFound } from 'next/navigation'

const route = 'notes'

const Posts = getPosts(route)

interface PageProps {
  params: Post
}

export async function generateStaticParams() {
  return Posts.map((post) => ({
    slug: `${post.slug}`,
  }))
}

export function generateMetadata({ params }: PageProps) {
  const post = Posts.find((post: { slug: string }) => post.slug === params.slug)
  const title = post ? post.title : ''
  const date = post ? post.date : ''
  const image = `/api/og?title=${encodeURIComponent(title)}&date=${encodeURIComponent(formatter.date(new Date(date)))}`

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  }
}

export default function Page({ params }: PageProps) {
  const post = Posts.find((post: { slug: string }) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return <Layout post={post} route={route} />
}
