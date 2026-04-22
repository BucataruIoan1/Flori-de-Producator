import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import ContactInfo from '@/components/ContactInfo/ContactInfo'
import ContactBox from '@/components/ContactBox/ContactBox'
import ContactMap from '@/components/ContactMap/ContactMap'

import './Contact.css'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactInfo />
        <section className="contact-body">
          <div className="contact-body__container">
            <div className="contact-body__boxes">
              <ContactBox variant="phone" />
              <ContactBox variant="address" />
              <ContactBox variant="schedule" />
            </div>
            <div className="contact-body__map">
              <ContactMap />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
