'use client'

import type { Post } from '@/types'

import { getDaysInYear } from '@/app/(posts)/utils/getDaysInYear'
import { cn } from '@/lib/cn'

type HeatMapPostsProps = {
  year: number
  posts: Post[]
}

const TOTAL_DATES_COUNT = 371

const weekdays = ['', 'Mon', '', 'Wed', '', 'Fri', '']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const backgrounds = ['#ebedf0', '#40c463', '#30a14e', '#216e39']

function isDatesEqual(date1: Date, date2: Date) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()
}

export function HeatMapPosts({ year, posts }: HeatMapPostsProps) {
  let dates: {
    date: Date
    count: number
  }[] = []

  const dayOne = new Date(year, 0, 1).getDay()

  for (let i = dayOne - 1; i >= 0; i--) {
    dates.push({
      date: new Date(year - 1, 11, 31 - i),
      count: 0,
    })
  }

  dates = [
    ...dates,
    ...new Array(getDaysInYear(year)).fill(0).map((_, index) => {
      const d = new Date(year, 0, index + 1)
      const postsPerDay = posts.filter((post) => isDatesEqual(post.date, d))

      return {
        date: d,
        count: postsPerDay.length,
      }
    }),
  ]

  const restDays = TOTAL_DATES_COUNT - dates.length

  for (let i = 0; i < restDays; i++) {
    dates.push({
      date: new Date(year + 1, 0, i + 1),
      count: 0,
    })
  }

  const firstRow = []
  for (let i = 0; i < 53; i++) {
    firstRow.push(dates[i * 7].date)
  }

  const monthTdSpan: number[] = []
  for (const date of firstRow) {
    const month = date.getMonth()

    if (date.getFullYear() < year) {
      monthTdSpan[0] = 1
    }

    if (!monthTdSpan[month]) {
      monthTdSpan[month] = 0
    }

    if (date.getFullYear() === year) {
      monthTdSpan[month] += 1
    }
  }

  return (
    <div className="max-w-full overflow-x-auto overflow-y-hidden">
      <table className="w-[max-content] border-separate border-spacing-[2px]">
        <tbody>
          <tr>
            <td />
            {months.map((month, index) => (
              <td key={`${year}-${month}`} colSpan={monthTdSpan[index]} className="text-[10px]">
                {month}
              </td>
            ))}
          </tr>
          {weekdays.map((weekday, wdIndex) => (
            <tr key={`${year}-${wdIndex}`} className="h-[9px]">
              <td className="relative pr-7 text-left">
                <span className="-bottom-1 absolute text-[9px]">{weekday}</span>
              </td>
              {dates.slice(wdIndex * 53, wdIndex * 53 + 53).map((date, index) => {
                const d = dates[index * 7 + wdIndex]
                return (
                  <td
                    key={date.date.toString()}
                    title={d.date.toString()}
                    className={cn(
                      'h-[9px] w-[9px] rounded-[2px] text-[10px]',
                      d.date.getFullYear() === year && '-outline-offset-1 outline outline-1 outline-[#1b1f230f]',
                    )}
                    style={{
                      backgroundColor: d.date.getFullYear() === year ? backgrounds[d.count > backgrounds.length ? backgrounds.length : d.count] : 'transparent',
                    }}
                  />
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
