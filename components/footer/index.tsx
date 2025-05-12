const Footer = () => {
  return (
    <div className="flex w-full items-center gap-4">
      <div className="text-gray-10 text-sm">{`Copyright © ${new Date().getFullYear()} Daniel Nguyen`}</div>
      <span className="text-gray-10">•</span>
      <nav className="flex gap-4">
        <a href="https://github.com/tatthien" rel="noreferrer" aria-label="Github" className="flex flex-1 items-center gap-2 text-gray-9 text-sm">
          GitHub
        </a>
        <a href="https://x.com/hey_thien" rel="noreferrer" aria-label="Twitter" className="flex flex-1 items-center gap-2 text-gray-9 text-sm">
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/tatthien/" rel="noreferrer" aria-label="Linkedin" className="flex flex-1 shrink-0 items-center gap-2 text-gray-9 text-sm">
          LinkedIn
        </a>
      </nav>
    </div>
  )
}

export { Footer }
