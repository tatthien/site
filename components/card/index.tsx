export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5 py-5 bg-[#fff] rounded-2xl border border-gray-4 shadow-sm shadow-gray-5">
      {children}
    </div>
  )
}
