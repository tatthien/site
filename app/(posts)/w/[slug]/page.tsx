import type { Post } from '@/types'

import { Breadcrumb } from '@/components/breadcrumb'
import { Layout } from '@/components/screens/posts'
import { formatter } from '@/lib/formatter'
import { getPosts } from '@/lib/mdx'
import { OpenGraph } from '@/lib/og'

import { notFound } from 'next/navigation'

const route = 'w'

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
    description: post?.description ?? OpenGraph.description,
    openGraph: {
      ...OpenGraph.openGraph,
      title,
      description: post?.description ?? OpenGraph.openGraph?.description,
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
    twitter: {
      ...OpenGraph.twitter,
      title,
      description: post?.description ?? OpenGraph.twitter?.description,
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
  }
}

export default function Page({ params }: PageProps) {
  const post = Posts.find((post: { slug: string }) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb post={post} />
      <Layout post={post} />
    </div>
  )
}
