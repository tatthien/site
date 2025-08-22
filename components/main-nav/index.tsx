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
    label: 'Resume',
    href: '/pages/resume',
  },
]

export function MainNav() {
  return (
    <div className="flex flex-col lg:gap-5">
      <ul className="flex gap-6 lg:flex-col lg:gap-0">
        {menus.map(({ label, href }) => (
          <li key={href} className="relative list-none text-sm text-right">
            <NavLink label={label} href={href} />
          </li>
        ))}
      </ul>
      <ul className="flex gap-6 lg:flex-col lg:gap-0">
        <a href="https://github.com/tatthien" className="text-right text-sm text-gray-9">GitHub</a>
        <a href="https://x.com/hey_thien" className="text-right text-sm text-gray-9">Twitter</a>
        <a href="https://linkedin.com/in/tatthien" className="text-right text-sm text-gray-9">LinkedIn</a>
      </ul>
    </div>
  )
}

const NavLink = ({ label, href }: { label: string; href: string }) => {
  const pathname = usePathname()
  const active = useMemo(() => {
    return pathname === href || (pathname.startsWith(href) && href !== '/')
  }, [pathname, href])

  return (
    <Link className={active ? 'font-semibold' : ''} href={href} prefetch={true}>
      {label}
    </Link>
  )
}
