import Navbar from '@/components/Navbar/Navbar'
import IntroPage from '@/components/IntroPage/IntroPage'
import About from '@/components/IntroPage/About/About'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <IntroPage />
        <About />
      </main>
    </>
  )
}
