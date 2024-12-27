const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="text-gray-10 text-small">{`Copyright © ${new Date().getFullYear()} Daniel Nguyen`}</div>
    </div>
  )
}

export { Footer }
