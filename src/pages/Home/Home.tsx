import Navbar from '@/components/Navbar/Navbar'
import IntroPage from '@/components/IntroPage/IntroPage'

import './Home.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <IntroPage />
      </main>
    </>
  )
}
