import { Heart, Leaf, Sprout } from 'lucide-react'

import greenhouse1 from '@/assets/images/greenhouse-1.jpg'
import greenhouse2 from '@/assets/images/greenhouse-2.jpg'

import './About.css'

const aboutHighlights = [
  { icon: Sprout, label: 'CRESCUTE LOCAL' },
  { icon: Leaf, label: 'SOIURI SELECTE' },
  { icon: Heart, label: 'CU PASIUNE' },
]

export default function About() {
  return (
    <section className="about" aria-labelledby="despre-noi-heading">
      <div className="about__container">
        <div className="about__content animate-fade-up">
          <span className="about__eyebrow">Despre noi</span>
          <h2 className="about__title" id="despre-noi-heading">
            Tradiție, grijă și
            <br />
            dragoste pentru flori
          </h2>

          <p className="about__description">
            La <strong>Flori de Producător</strong> cultivăm cu răbdare cele
            mai frumoase soiuri de mușcate. Fiecare răsad este îngrijit zi de
            zi în solariile noastre, până devine o floare gata să-ți bucure
            ochii și sufletul.
          </p>

          <div className="about__features" aria-label="Avantajele noastre">
            {aboutHighlights.map(({ icon: Icon, label }) => (
              <div key={label} className="about__feature">
                <div className="about__featureIconWrap">
                  <Icon className="about__featureIcon" size={24} />
                </div>
                <p className="about__featureLabel">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about__gallery animate-fade-up">
          <figure className="about__imageCard about__imageCard--first">
            <img
              src={greenhouse1}
              alt="Solar cu mușcate în curs de creștere"
              className="about__image"
              loading="lazy"
            />
          </figure>

          <figure className="about__imageCard about__imageCard--second">
            <img
              src={greenhouse2}
              alt="Răsaduri de mușcate în ghivece"
              className="about__image"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
