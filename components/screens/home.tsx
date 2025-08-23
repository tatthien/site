import { Posts } from '@/components/posts'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    name: 'Church election app',
    description: 'A micro app for my local church\'s leadership elections',
    url: 'https://vote.thien.dev',
  },
  {
    name: 'Static site generator',
    description: 'An opinionated static site generator written in Go',
    url: 'https://github.com/tatthien/giraffe',
  },
]

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-4">
          Hi! I'm <Badge label="Daniel Nguyen" logo="/img/avatar.webp" />.
          I'm a Software Engineer specializing in <Badge label="JavaScript" logo="/img/js-logo.svg" />,{' '}
          including its ecosystem like <Badge label="React" logo="/img/react-logo.svg" logoSize={22} />,{' '}
          <Badge label="React Native" logo="/img/react-logo.svg" />,{' '}
          <Badge label="Next.js" logo="/img/nextjs-logo.svg" logoSize={22} />,{' '}
          and <Badge label="Node.js" logo="/img/nodejs-logo.svg" />.{' '}
          I also work with Go on occasion. This is my digital garden where I share my interest in a little of everything that crosses my mind, but mostly
          about technology.
        </p>
      </div>
      <div>
        <h2 className="py-2 text-gray-9">Side projects</h2>
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
          <h2 className="py-2 capitalize">Writing</h2>
        </Link>
        <Posts category="w" group />
      </div>
    </div>
  )
}

function Badge({ label, logo, logoSize = 20 }: { label: string, logo: string, logoSize?: number }) {
  return (
    <span className='inline-flex items-baseline gap-1 group relative'>
      <Image
        src={logo}
        alt="Avatar"
        width={logoSize}
        height={logoSize}
        className="rounded-sm flex-shrink-0 self-center"
        fetchPriority="high"
        loading="eager"
      />
      <span className="text-nowrap whitespace-nowrap">{label}</span>
    </span>
  )
}
