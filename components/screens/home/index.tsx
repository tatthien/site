import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { Posts } from '@/components/posts'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <div className='flex gap-4 items-center'>
          <img src="/img/avatar.svg" alt="Thien Nguyen" className='w-32 md:w-44' />
          <div>
            <h1 className="font-semibold text-xl">Thien Nguyen (aka. Daniel)</h1>
            <h2 className="mb-0 font-normal">Sharing my interest in a little of everything that crosses my mind, but mostly in technology.</h2>
          </div>
        </div>
      </Card>
      <Card>
        <Link href={'/posts'} prefetch={true} className="flex justify-between">
          <h2 className="py-2 text-gray-9 capitalize">Writing ⇢</h2>
        </Link>
        <Posts category="posts" limit={10} />
      </Card>
      <Footer />
    </div>
  )
}
