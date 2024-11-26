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
      <div className="mb-10 flex flex-col items-center gap-12 md:flex-row">
        <ArcCard />
        <div>
          <p className="mb-4 font-light text-xl">Sharing my interest in a little of everything that crosses my mind, but mostly in technology.</p>
          <p className="font-light text-xl">Me on other platforms:</p>
          <nav className="flex flex-col gap-2">
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
        <Link href={'/posts'} prefetch={true} className="flex justify-between">
          <h2 className="py-2 text-gray-9 capitalize">Writing ⇢</h2>
        </Link>
        <Posts category="posts" limit={10} />
      </Card>
      <Card>
        <h2 className="py-2 text-gray-9 capitalize">Side projects</h2>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div key={project.name}>
              <h3>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h3>
              <p className="my-0 text-gray-9 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </Card>
      <Footer />
    </div>
  )
}
