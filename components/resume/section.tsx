'use client'

import { useEffect, useRef, useState } from 'react'

export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)
  const [height, setHeight] = useState<number>()
  const childRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (childRef.current) {
      setHeight(childRef.current.clientHeight)
    }
  }, [])

  return (
    <section className="flex flex-col gap-4">
      <div>
        <button
          type="button"
          className="flex w-full cursor-pointer justify-between"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span className="font-semibold text-lg">{title}</span>
          <span className="text-xl">{open ? '−' : '+'}</span>
        </button>
        <div className="h-[1px] bg-gray-12" />
      </div>
      <div ref={childRef} style={{ height: open ? height : 0 }} className="overflow-hidden transition-all duration-300">
        {children}
      </div>
    </section>
  )
}
