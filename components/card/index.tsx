export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div {...props} className="rounded border border-gray-5 bg-[#fff] px-3 py-3 md:px-5 md:py-5 dark:bg-gray-2">
      {children}
    </div>
  )
}
