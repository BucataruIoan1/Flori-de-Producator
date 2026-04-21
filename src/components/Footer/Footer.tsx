import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'

import logo from '@/assets/images/logo.jpeg'

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <img
            src={logo}
            alt="Flori de Producător"
            className="footer__logo"
          />
          <p className="footer__tagline">
            Flori crescute cu grijă în solarii proprii. Calitate
            de producător, direct la tine acasă.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__colTitle">Contact</h4>
          <ul className="footer__list">
            <li className="footer__listItem">
              <Phone size={16} className="footer__icon" aria-hidden="true" />
              <a href="tel:0757958486" className="footer__link">0757 958 486</a>
            </li>
            <li className="footer__listItem">
              <Phone size={16} className="footer__icon" aria-hidden="true" />
              <a href="tel:0737405397" className="footer__link">0737 405 397</a>
            </li>
            <li className="footer__listItem footer__listItem--start">
              <MapPin size={16} className="footer__icon footer__icon--top" aria-hidden="true" />
              <span>Str. Recoltei 5, Dumbrava</span>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__colTitle">Navigare</h4>
          <ul className="footer__navList">
            <li><Link to="/" className="footer__navLink">Acasă</Link></li>
            <li><Link to="/florile-noastre" className="footer__navLink">Florile noastre</Link></li>
            <li><Link to="/preturi" className="footer__navLink">Prețuri</Link></li>
            <li><Link to="/contact" className="footer__navLink">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Flori de Producător — Toate drepturile rezervate
        </p>
      </div>
    </footer>
  )
}
