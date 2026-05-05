import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import Flower from '@/components/Flower/Flower'

import blancheRoche from '@/assets/images/flowers/blanche-roche.jpeg'
import decoraDarkPink from '@/assets/images/flowers/decora-dark-pink.jpeg'
import dresdenImproved from '@/assets/images/flowers/dresden-improve.jpeg'

import './PresentationFlowers.css'

const featured = [
  {
    image: blancheRoche,
    type: 'Mușcată Zonală',
    name: 'Blanche Roche',
    description: 'Petale albe pure, eleganță atemporală pentru orice balcon.',
  },
  {
    image: decoraDarkPink,
    type: 'Mușcată Curgătoare',
    name: 'Decora Dark Pink',
    description: 'Flori curgătoare, roz intens, cascadă de culoare.',
  },
  {
    image: dresdenImproved,
    type: 'Mușcată Zonală',
    name: 'Dresden Improved',
    description: 'Petale somon delicate, soi clasic îmbunătățit.',
  },
]

export default function PresentationFlowers() {
  return (
    <section className="pf" aria-labelledby="selectia-noastra-heading">
      <div className="pf__header animate-fade-up">
        <span className="pf__eyebrow">Selecția noastră</span>
        <h2 className="pf__title" id="selectia-noastra-heading">
          Cele mai îndrăgite soiuri
        </h2>
      </div>

      <div className="pf__grid">
        {featured.map((flower, i) => (
          <Flower
            key={flower.name}
            image={flower.image}
            type={flower.type}
            name={flower.name}
            description={flower.description}
            animationDelay={i * 0.15}
          />
        ))}
      </div>

      <div className="pf__cta">
        <Link to="/florile-noastre" className="pf__ctaBtn">
          Vezi toate florile
          <ArrowRight size={18} className="pf__ctaIcon" />
        </Link>
      </div>
    </section>
  )
}
