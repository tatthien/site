import { ArcCard } from '@/components/arc-card'
import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { Posts } from '@/components/posts'

import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    name: 'Church election app',
    description: "A micro app for my local church's leadership elections",
    url: 'https://vote.thien.dev',
  },
  {
    name: 'Static site generator',
    description: 'An opinionated static site generator written in Go',
    url: 'https://github.com/tatthien/giraffe',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-10 flex flex-col items-center gap-8 md:flex-row">
        <ArcCard>
          <div className="relative grid w-full grid-rows-[200px_60px_40px] gap-4 rounded-2xl border border-gray-4 bg-[#fff] p-4 shadow-md md:w-[240px]">
            <figure className="flex justify-center rounded-sm">
              <img src="/img/avatar.webp" alt="Avatar" className="h-auto w-full rounded-sm object-cover" />
            </figure>
            <div>
              <p className="font-bold text-2xl">Daniel Nguyen</p>
              <p className="text-lg">Software Engineer</p>
            </div>
            <footer className="flex items-end">
              <p className="flex rounded-sm border border-current px-1 py-1 text-[9px] uppercase">
                thien.dev{' '}
                <span className="-my-1 mx-1 inline-block w-6 border-current border-r border-l bg-[repeating-linear-gradient(-45deg,currentColor,currentColor_1px,transparent_1px,transparent_2px)]" />{' '}
                {new Date().getFullYear()}
              </p>
            </footer>
          </div>
        </ArcCard>
        <div>
          <p className="mb-4">
            Hello, I'm Daniel Nguyen, a Software Engineer specializing in JavaScript, including its ecosystem like React, Next.js, and Node.js. I also work with
            Go on occasion. This is my little corner of the internet where I share my interest in a little of everything that crosses my mind, but mostly about
            technology.
          </p>
          <p>Connect with me on:</p>
          <nav className="flex gap-6">
            <a href="https://github.com/tatthien" className="flex items-center gap-2 text-gray-9">
              <Github width={18} />
              GitHub
            </a>
            <a href="https://x.com/hey_thien" className="flex items-center gap-2 text-gray-9">
              <Twitter width={18} />
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/tatthien/" className="flex items-center gap-2 text-gray-9">
              <Linkedin width={18} />
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
      <Card>
        <h2 className="py-2 text-gray-9 capitalize">Side projects</h2>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              className="-mx-2 rounded-md px-2 py-1 no-underline after:hidden hover:bg-gray-3 hover:opacity-100"
              rel="noreferrer"
            >
              <h3>{project.name}</h3>
              <p className="my-0 text-gray-9 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </Card>
      <Card>
        <Link href={'/posts'} prefetch={true} className="flex justify-between">
          <h2 className="py-2 text-gray-9 capitalize">Writing ⇢</h2>
        </Link>
        <Posts category="w" />
      </Card>
      <Footer />
    </div>
  )
}
