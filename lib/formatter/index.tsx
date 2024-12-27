const date = (input: Date): string => {
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(input)
}

const number = (input: number): string => {
  return new Intl.NumberFormat('en', {
    style: 'decimal',
  }).format(input)
}

const time = (value: number, unit: Intl.RelativeTimeFormatUnit): string => {
  return new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  }).format(value, unit)
}

export const formatter = {
  date,
  number,
  time,
}
