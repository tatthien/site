import { AppThemeProvider } from '@/components/theme'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AppThemeProvider>{children}</AppThemeProvider>
}
