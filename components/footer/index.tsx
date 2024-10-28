import { AppThemeSwitcher } from '@/components/theme'

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  )
}

export { Footer }
