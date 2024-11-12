import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { Posts } from '@/components/posts'

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
      <Card>
        <div className="flex flex-wrap items-center gap-4">
          <img src="/img/avatar.svg" alt="Thien Nguyen" className="w-32 md:w-44" />
          <div className="flex-1">
            <h1 className="font-semibold text-xl">Thien Nguyen (aka. Daniel)</h1>
            <h2 className="mb-0 font-normal">Sharing my interest in a little of everything that crosses my mind, but mostly in technology.</h2>
          </div>
        </div>
      </Card>
      <Card>
        <Link href={'/posts'} prefetch={true} className="flex justify-between">
          <h2 className="py-2 text-gray-9 capitalize">Writing ⇢</h2>
        </Link>
        <Posts category="posts" limit={10} />
      </Card>
      <Card>
        <h2 className="py-2 text-gray-9 capitalize">Projects</h2>
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
