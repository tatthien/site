'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const menus = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Writing',
    href: '/notes'
  },
  {
    label: 'About',
    href: '/pages/about',
  }
]

export function MainNav() {
  return (
    <aside className='py-6 px-4 lg:absolute lg:py-0 lg:px-0 lg:top-[100px] lg:right-[50%] lg:mr-[360px]'>
      <ul className="flex flex-col gap-1">
        {menus.map(({ label, href }) => (
          <li key={href} className='list-none relative text-sm'>
            <NavLink label={label} href={href} />
          </li>
        ))}
      </ul>
    </aside>
  )
}

const NavLink = ({ label, href }: { label: string, href: string }) => {
  const pathname = usePathname()
  const active = useMemo(() => {
    return pathname === href || (pathname.startsWith(href) && href !== '/')
  }, [pathname, href])

  return (
    <Link href={href} prefetch={true}>
      {active && <span className="absolute left-[-20px]">►</span>}
      {label}
    </Link>
  )
}
