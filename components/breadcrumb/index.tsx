'use client'

import { cn } from '@/lib/cn'
import type { Post } from '@/types'

import { ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type BreadcrumbProps = {
  post: Post
}

export const Breadcrumb = ({ post }: BreadcrumbProps) => {
  const pathname = usePathname()

  const paths = pathname
    .split('/')
    .filter((path) => path !== '')
    .map((path) => path === post.slug ? post.title : path.replace(/-/g, '').replace(/\b\w/g, (char) => char.toUpperCase()))

  return (
    <div className={cn('mt-0 mb-4 flex w-full items-center gap-1 align-middle font-normal text-sm')}>
      <Link className="text-gray-9" href="/" prefetch={true}>
        Home
      </Link>
      <ChevronRightIcon className="text-gray-9" />
      {paths.map((path, index) => {
        const href = `/${paths
          .slice(0, index + 1)
          .join('/')
          .toLowerCase()}`

        const isLast = index === paths.length - 1

        return (
          <React.Fragment key={path}>
            {isLast ? (
              <span className="text-gray-9">{path}</span>
            ) : (
              <Link className="text-gray-9" href={href} prefetch={true}>
                {path}
              </Link>
            )}
            {index < paths.length - 1 && <ChevronRightIcon className="text-muted" />}
          </React.Fragment>
        )
      })}
    </div>
  )
}
