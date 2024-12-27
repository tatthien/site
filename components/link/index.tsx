import clsx from 'clsx'

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  text?: string
  className?: string
}

const Link = ({ text, href, className, children }: LinkProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer nofollow" className={clsx(className)} href={href}>
      {text || children}
    </a>
  )
}

export default Link
