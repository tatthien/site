export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-4xl font-bold">404</span>
      <p>
        The page you are looking for does not exist. Maybe you want to go <a href="/" className="text-primary">home</a> or read my <a href="/w" className="text-primary">blog</a>.
      </p>
    </div>
  )
}
