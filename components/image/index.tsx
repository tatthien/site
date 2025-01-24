'use client'

import type { ImageProps } from 'next/image'

import { cn } from '@/lib/cn'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface MDXImageProps extends ImageProps {
  alt: string
  caption?: React.ReactNode
}

const MAX_SCALE_WIDTH = 1024

export default function MDXImage({ caption, alt, ...props }: MDXImageProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', zoomOut)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('scroll', zoomOut)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleZoom = () => {
    if (isZoomed) {
      zoomOut()
      return
    }

    zoomIn()
  }

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      zoomOut()
    }
  }

  const zoomIn = () => {
    if (!imageRef.current) return
    const { width, height, top, left } = imageRef.current.getBoundingClientRect()

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const scale = Math.min(MAX_SCALE_WIDTH, windowWidth) / width

    const newHeight = scale * height
    const newWidth = scale * width

    const translateX = (windowWidth - newWidth) / 2 - left
    const translateY = (windowHeight - newHeight) / 2 - top

    imageRef.current.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`
    imageRef.current.style.zIndex = '100'
    imageRef.current.style.cursor = 'zoom-out'
    setIsZoomed(true)
  }

  const zoomOut = () => {
    if (!imageRef.current) return
    imageRef.current.style.transform = 'scale(1)'
    imageRef.current.style.zIndex = '0'
    imageRef.current.style.cursor = 'zoom-in'
    setIsZoomed(false)
  }

  return (
    <div className="mt-2 mb-6">
      <figure data-mdx-image>
        <Image
          ref={imageRef}
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
            transformOrigin: 'left top',
            cursor: 'zoom-in',
          }}
          onClick={handleZoom}
          {...props}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      <div
        aria-hidden="true"
        className={cn(
          'fixed top-0 left-0 h-screen w-screen cursor-zoom-out bg-white/30 backdrop-blur-md transition-opacity',
          isZoomed ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={zoomOut}
        onKeyDown={zoomOut}
      />
    </div>
  )
}
