import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { Posts } from '@/components/posts'

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h1 className="font-semibold text-xl">Thien Nguyen (aka. Daniel)</h1>
        <h2 className="font-normal mb-0">Sharing my interest in a little of everything that crosses my mind, but mostly in technology.</h2>
      </Card>
      <Card>
        <Posts category="notes" limit={10} />
      </Card>
      <Footer />
    </div>
  )
}
