import type { MDXComponents } from 'mdx/types'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import type { PluggableList } from 'unified'

import { cn } from '@/lib/cn'

import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import type React from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { MDXImage } from './components/mdx-image'

const components: MDXComponents = {
  Image: ({ caption, alt, ...props }) => <MDXImage {...props} caption={caption} alt={alt} />,
  h2: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
      <h2 id={id} className="mt-10 mb-4 text-xl">
        {children}
      </h2>
    )
  },
  a: ({ children, href }) => {
    return (
      <a target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline" href={href}>
        {children}
      </a>
    )
  },
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className={cn('border-gray-6 border-l-2 px-4 text-gray-10 md:text-lg md:leading-relaxed', className)} {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-hidden overflow-y-auto">
      <table className={cn('w-full overflow-hidden', className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className={cn('border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right', className)} {...props} />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn('border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => {
    return <ol className={cn('mb-6 ml-4 list-decimal', className)} {...props} />
  },
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => <ul className={cn('mb-6 ml-4', className)} {...props} />,
  li: ({ className, children }: React.HTMLAttributes<HTMLLIElement>) => {
    return <li className={cn('mb-2 pl-2', className)}>{children}</li>
  },
  img: ({ alt, src }) => {
    return (
      <Image
        alt={alt as string}
        src={src as string}
        width={1000}
        height={1000}
        sizes="100vw"
        style={{
          objectFit: 'contain',
          marginLeft: '-20px',
          width: 'calc(100% + 40px)',
          maxWidth: 'calc(100% + 40px)',
          height: 'auto',
          objectPosition: 'center',
          transition: 'all 0.3s ease-in-out',
        }}
      />
    )
  },
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: 'github-light',
                  light: 'github-light',
                },
                keepBackground: false,
                defaultLang: 'plain',
              },
            ],
          ] as PluggableList,
        },
      }}
    />
  )
}
