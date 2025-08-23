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
    href: '/p/resume',
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/tatthien',
  },
  {
    label: 'Twitter',
    href: 'https://x.com/hey_thien',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tatthien',
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
        {socialLinks.map(({ label, href }) => (
          <li key={href} className="text-right text-sm">
            <a href={href} className="text-gray-9">
              {label}
            </a>
          </li>
        ))}
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
