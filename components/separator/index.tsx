import { twMerge } from 'tailwind-merge'

export const Seperator = ({ className }: { className?: string }) => <div className={twMerge('border-border border-t', className)} />
