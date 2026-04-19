import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import logo from '@/assets/images/logo.jpeg'

import './Navbar.css'

type NavItem = {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Acasă', to: '/' },
  { label: 'Florile Noastre', to: '/florile-noastre' },
  { label: 'Prețuri', to: '/preturi' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Flori de Producător"
            className="navbar__logo"
          />
        </Link>

        <nav className="navbar__desktopNav" aria-label="Navigație principală">
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="navbar__mobileToggle"
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="navbar__mobileNav" aria-label="Navigație mobil">
          <ul className="navbar__mobileList">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `navbar__mobileLink${isActive ? ' navbar__mobileLink--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
