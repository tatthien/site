import { ArcCard } from '@/components/arc-card'
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
      <div>
        <p className="mb-4">
          Hello, I'm <strong>Daniel Nguyen</strong>, a Software Engineer specializing in JavaScript, including its ecosystem like React, Next.js, and Node.js.
          I also work with Go on occasion. This is my digital garden where I share my interest in a little of everything that crosses my mind, but mostly
          about technology.
        </p>
      </div>
      <div>
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
      </div>
      <div>
        <Link href="/w" prefetch={true} className="flex justify-between text-primary">
          <h2 className="py-2 capitalize">Writing ⇢</h2>
        </Link>
        <Posts category="w" group />
      </div>
    </div>
  )
}
