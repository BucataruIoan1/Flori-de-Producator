import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import PriceInfo from '@/components/PriceInfo/PriceInfo'
import PriceBox from '@/components/PriceBox/PriceBox'
import OtherPriceBox from '@/components/OtherPriceBox/OtherPriceBox'

import './Prices.css'

export default function Prices() {
  return (
    <>
      <Navbar />
      <main>
        <PriceInfo />
        <section className="prices-body">
          <div className="prices-body__container">
            <div className="prices-body__grid">
              <PriceBox variant="rasad" />
              <PriceBox variant="ghivece" />
            </div>
            <OtherPriceBox />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
