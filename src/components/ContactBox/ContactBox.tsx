import { Phone, MapPin, Clock } from 'lucide-react'
import './ContactBox.css'

export type ContactBoxVariant = 'phone' | 'address' | 'schedule'

interface ContactBoxProps {
  variant: ContactBoxVariant
}

const MAPS_URL =
  'https://maps.google.com/maps?q=Str.+Recoltei+5,+Dumbrava,+Romania'

export default function ContactBox({ variant }: ContactBoxProps) {
  if (variant === 'phone') {
    return (
      <article className="contact-box contact-box--light" aria-label="Telefon">
        <div className="contact-box__icon-wrap contact-box__icon-wrap--rose">
          <Phone size={22} aria-hidden="true" />
        </div>
        <div className="contact-box__body">
          <span className="contact-box__label">Telefon</span>
          <h2 className="contact-box__title">Sună-ne oricând</h2>
          <a href="tel:0757958486" className="contact-box__line contact-box__line--link">
            0757 958 486
          </a>
          <a href="tel:0737405397" className="contact-box__line contact-box__line--link">
            0737 405 397
          </a>
        </div>
      </article>
    )
  }

  if (variant === 'address') {
    return (
      <article className="contact-box contact-box--light" aria-label="Adresă">
        <div className="contact-box__icon-wrap contact-box__icon-wrap--rose">
          <MapPin size={22} aria-hidden="true" />
        </div>
        <div className="contact-box__body">
          <span className="contact-box__label">Adresă</span>
          <h2 className="contact-box__title">Vino la solar</h2>
          <p className="contact-box__line">Str. Recoltei nr. 5</p>
          <p className="contact-box__line">Dumbrava, România</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-box__maps-btn"
          >
            Deschide în Google Maps
          </a>
        </div>
      </article>
    )
  }

  return (
    <article className="contact-box contact-box--dark" aria-label="Program">
      <div className="contact-box__icon-wrap contact-box__icon-wrap--light">
        <Clock size={22} aria-hidden="true" />
      </div>
      <div className="contact-box__body">
        <span className="contact-box__label contact-box__label--light">Program</span>
        <h2 className="contact-box__title contact-box__title--light">Te așteptăm</h2>
        <p className="contact-box__line contact-box__line--light">Luni – Sâmbătă: 08:00 – 19:00</p>
        <p className="contact-box__line contact-box__line--light">Duminică: 09:00 – 14:00</p>
      </div>
    </article>
  )
}
