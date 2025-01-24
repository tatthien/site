'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const menus = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Writing',
    href: '/w',
  },
  {
    label: 'About',
    href: '/pages/about',
  },
  {
    label: 'Resume',
    href: '/pages/resume',
  },
]

export function MainNav() {
  return (
    <ul className="flex justify-center gap-6 md:flex-col md:gap-1">
      {menus.map(({ label, href }) => (
        <li key={href} className="relative list-none text-sm">
          <NavLink label={label} href={href} />
        </li>
      ))}
    </ul>
  )
}

const NavLink = ({ label, href }: { label: string; href: string }) => {
  const pathname = usePathname()
  const active = useMemo(() => {
    return pathname === href || (pathname.startsWith(href) && href !== '/')
  }, [pathname, href])

  return (
    <Link href={href} prefetch={true}>
      {active && <span className="absolute top-4 left-1/2 -translate-x-1/2 md:top-auto md:left-[-20px] md:translate-x-0 text-primary">✦</span>}
      {label}
    </Link>
  )
}
