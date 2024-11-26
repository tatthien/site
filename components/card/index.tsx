export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div {...props} className="rounded-2xl border border-gray-4 bg-[#fff] px-5 py-5 dark:bg-gray-2">
      {children}
    </div>
  )
}
