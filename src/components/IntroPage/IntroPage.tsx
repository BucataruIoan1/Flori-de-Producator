import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import homeImage from '../../assets/images/solar/home.jpg'
import './IntroPage.css'

export default function IntroPage() {
  return (
    <section className="intropage" aria-label="Secțiunea principală hero">
      <img
        src={homeImage}
        alt="Mușcate înflorite în solar"
        className="intropage__bgImage"
        width="1920"
        height="1280"
      />
      <div className="intropage__overlay bg-gradient-hero" aria-hidden="true" />

      <div className="intropage__content">
        <span className="intropage__brand">Flori de Producător</span>
        <h1 className="intropage__heading">
          Frumusețea
          <br />
          <em>crescută</em>
          <br />
          cu pasiune
        </h1>
        <p className="intropage__description">
          Mușcate de calitate, cultivate în solariile noastre, gata să-ți
          înflorească balconul, terasa sau grădina.
        </p>
        <div className="intropage__actions">
          <Link to="/florile-noastre" className="intropage__btnPrimary">
            Descoperă florile
            <ArrowRight size={18} className="intropage__btnIcon" />
          </Link>
          <Link to="/preturi" className="intropage__btnSecondary">
            Vezi prețurile
          </Link>
        </div>
      </div>

      <div className="intropage__scroll" aria-hidden="true">↓ SCROLL</div>
    </section>
  )
}
