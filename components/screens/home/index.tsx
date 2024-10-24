import { Footer } from '@/components/footer'
import { Posts } from '@/components/posts'

const Spacer = () => <div style={{ marginTop: '24px' }} />

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-xl">Thien Nguyen (aka. Daniel)</h1>
          <h2 className="font-normal">Sharing my interest in a little of everything that crosses my mind, but mostly in technology.</h2>
        </div>
      </div>
      <Spacer />
      <Posts category="notes" />
      <Spacer />
      <Footer />
    </div>
  )
}
