import Navbar from '@/components/Navbar/Navbar'
import IntroPage from '@/components/IntroPage/IntroPage'
import About from '@/components/IntroPage/About/About'
import PresentationFlowers from '@/components/PresentationFlowers/PresentationFlowers'
import PromoSection from '@/components/PromoSection/PromoSection'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <IntroPage />
        <About />
        <PresentationFlowers />
        <PromoSection />
      </main>
      <Footer />
    </>
  )
}
