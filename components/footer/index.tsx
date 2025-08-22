const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center gap-4">
      <div className="text-gray-10 text-sm">{`Copyright © ${new Date().getFullYear()} Daniel Nguyen`}</div>
    </div>
  )
}

export { Footer }
