import { isLeapYear } from './isLeapYear'

export function getDaysInYear(year: number) {
  if (isLeapYear(year)) {
    return 366
  }
  return 365
}
