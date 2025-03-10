import { ArcCard } from '@/components/arc-card'
import { Card } from '@/components/card'
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
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <ArcCard>
          <div className="relative grid w-full grid-rows-[340px_60px] gap-4 rounded border border-gray-5 bg-[#fff] p-4 md:w-[240px] md:grid-rows-[220px_60px]">
            <figure className="flex justify-center rounded-sm">
              <img src="/img/avatar.webp" alt="Avatar" className="h-auto w-full rounded-sm object-cover" />
            </figure>
            <div>
              <p className="font-bold text-2xl">Daniel Nguyen</p>
              <p>Software Engineer</p>
            </div>
          </div>
        </ArcCard>
        <div>
          <p className="mb-4">
            Hello, I'm <strong>Daniel Nguyen</strong>, a Software Engineer specializing in JavaScript, including its ecosystem like React, Next.js, and Node.js.
            I also work with Go on occasion. This is my digital garden where I share my interest in a little of everything that crosses my mind, but mostly
            about technology.
          </p>
          <p className="mb-4">Connect with me on:</p>
          <nav className="flex flex-col flex-wrap gap-1 md:flex-row">
            <a href="https://github.com/tatthien" target="_blank" rel="noreferrer" className="flex flex-1 items-center gap-2 text-gray-9">
              <Github width={18} />
              GitHub
            </a>
            <a href="https://x.com/hey_thien" target="_blank" rel="noreferrer" className="flex flex-1 items-center gap-2 text-gray-9">
              <Twitter width={18} />
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/tatthien/" target="_blank" rel="noreferrer" className="flex flex-1 shrink-0 items-center gap-2 text-gray-9">
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
              className="-mx-2 px-2 py-1 no-underline after:hidden hover:bg-gray-3 hover:opacity-100"
              rel="noreferrer"
            >
              <h3>{project.name}</h3>
              <p className="my-0 text-gray-9 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </Card>
      <Card>
        <Link href="/w" prefetch={true} className="flex justify-between text-primary">
          <h2 className="py-2 capitalize">Writing ⇢</h2>
        </Link>
        <Posts category="w" group />
      </Card>
    </div>
  )
}
