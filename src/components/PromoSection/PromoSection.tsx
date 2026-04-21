import { Link } from 'react-router-dom'
import './PromoSection.css'

export default function PromoSection() {
  return (
    <section className="promo">
      <div className="promo__card">
        <div className="promo__radial" aria-hidden="true" />
        <div className="promo__content">
          <span className="promo__eyebrow">Vino la noi</span>
          <h2 className="promo__title">
            Alege florile preferate direct
            <br />
            din solar
          </h2>
          <p className="promo__description">
            Te așteptăm cu o gamă variată de mușcate, gata să transforme spațiul tău
            într-o grădină vie.
          </p>
          <div className="promo__actions">
            <Link to="/contact" className="promo__btnPrimary">
              Sună acum
            </Link>
            <Link to="/preturi" className="promo__btnSecondary">
              Vezi prețuri
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
