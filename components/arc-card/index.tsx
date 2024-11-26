'use client'

import { useRef } from 'react'

export function ArcCard() {
  const boundingRef = useRef<DOMRect | null>(null)

  return (
    <div className="flex flex-col [perspective:1000px]">
      <div
        onMouseLeave={() => {
          boundingRef.current = null
        }}
        onMouseEnter={(e) => {
          boundingRef.current = e.currentTarget.getBoundingClientRect()
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return
          const x = ev.clientX - boundingRef.current.left
          const y = ev.clientY - boundingRef.current.top
          const xPercentage = x / boundingRef.current.width
          const yPercentage = y / boundingRef.current.height
          const xRotation = (xPercentage - 0.5) * 20
          const yRotation = (0.5 - yPercentage) * 20

          ev.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`)
          ev.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`)
          ev.currentTarget.style.setProperty('--x', `${xPercentage * 100}%`)
          ev.currentTarget.style.setProperty('--y', `${yPercentage * 100}%`)
        }}
        className="relative grid w-[260px] grid-rows-[200px_100px_40px] gap-4 rounded-2xl border border-gray-4 bg-[#fff] p-4 text-[#01a977] transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]"
      >
        <figure className="flex justify-center rounded-sm [background-image:radial-gradient(at_70%_40%,transparent_30%,currentColor_80%)]">
          <img src="/img/avatar.svg" alt="Avatar" className="h-full w-auto" />
        </figure>
        <div>
          <p className="font-bold text-3xl">Thien Nguyen</p>
          <p className="text-xl">Software Engineer</p>
        </div>
        <footer className="flex items-end">
          <p className="flex rounded-sm border border-current px-1 py-1 text-[9px] uppercase">
            thien.dev{' '}
            <span className="-my-1 mx-1 inline-block w-6 border-current border-r border-l bg-[repeating-linear-gradient(-45deg,currentColor,currentColor_1px,transparent_1px,transparent_2px)]" />{' '}
            2024
          </p>
        </footer>
      </div>
    </div>
  )
}
