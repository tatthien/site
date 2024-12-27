'use client'

import type { Post } from '@/types'

import { cn } from '@/lib/cn'

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
    .map((path) => {
      return path === post.slug ? post.title : path.replace(/-/g, '').replace(/\b\w/g, (char) => char.toUpperCase())
    })

  return (
    <div className={cn('flex w-full items-center gap-1 align-middle font-normal text-sm')}>
      <Link className="text-primary" href="/" prefetch={true}>
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
              <span className="truncate">{path}</span>
            ) : (
              <Link className="text-primary" href={href} prefetch={true}>
                {path.toLowerCase() === 'w' ? 'Notes' : path}
              </Link>
            )}
            {index < paths.length - 1 && <ChevronRightIcon className="text-muted" />}
          </React.Fragment>
        )
      })}
    </div>
  )
}
