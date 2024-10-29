'use client'

import type { ImageProps } from 'next/image'

import Image from 'next/image'

interface MDXImageProps extends ImageProps {
  alt: string
  caption?: string
}

export default function MDXImage({ caption, alt, ...props }: MDXImageProps) {
  return (
    <figure data-mdx-image>
      <Image
        alt={alt}
        width={1000}
        height={1000}
        sizes="100vw"
        style={{
          objectFit: 'contain',
          width: '100%',
          height: 'auto',
          objectPosition: 'center',
          transition: 'all 0.3s ease-in-out',
        }}
        {...props}
      />
      {caption && <figcaption className="pt-2 text-center">{caption}</figcaption>}
    </figure>
  )
}
