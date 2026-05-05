import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import FlowersInfo from '@/components/FlowersInfo/FlowersInfo'
import Flower from '@/components/Flower/Flower'

import blancheRoche from '@/assets/images/flowers/blanche-roche.jpeg'
import decoraDarkPink from '@/assets/images/flowers/decora-dark-pink.jpeg'
import dresdenImproved from '@/assets/images/flowers/dresden-improve.jpeg'
import evka from '@/assets/images/flowers/evka.jpeg'
import decoraRot from '@/assets/images/flowers/decora-rot.jpeg'
import kitty from '@/assets/images/flowers/kitty.jpeg'
import vicky from '@/assets/images/flowers/vicky.jpeg'
import emilia from '@/assets/images/flowers/emilia.jpeg'
import victor from '@/assets/images/flowers/victor.jpeg'
import greta from '@/assets/images/flowers/greta.jpeg'
import ellen from '@/assets/images/flowers/ellen.jpeg'
import stefanie from '@/assets/images/flowers/stefanie.jpg'

import './Flowers.css'

const flowers = [
  {
    image: blancheRoche,
    type: 'Mușcată Zonală',
    color: 'Alb',
    name: 'Blanche Roche',
    description: 'Petale albe pure, eleganță atemporală pentru orice balcon.',
  },
  {
    image: decoraDarkPink,
    type: 'Mușcată Curgătoare',
    color: 'Roz închis',
    name: 'Decora Dark Pink',
    description: 'Flori curgătoare, roz intens, cascadă de culoare.',
  },
  {
    image: dresdenImproved,
    type: 'Mușcată Zonală',
    color: 'Somon',
    name: 'Dresden Improved',
    description: 'Petale somon delicate, soi clasic îmbunătățit.',
  },
  {
    image: evka,
    type: 'Mușcată Zonală',
    color: 'Roșu coral',
    name: 'Evka',
    description: 'Roșu coral viu cu frunze variegate, neasemănată.',
  },
  {
    image: decoraRot,
    type: 'Mușcată Curgătoare',
    color: 'Roșu',
    name: 'Decora Rot',
    description: 'Roșu profund, curgătoare, perfectă pentru jardiniere.',
  },
  {
    image: kitty,
    type: 'Mușcată Curgătoare',
    color: 'Roz lavandă',
    name: 'Kitty',
    description: 'Roz lavandă cu vinișoare delicate, romantică.',
  },
  {
    image: vicky,
    type: 'Mușcată Curgătoare',
    color: 'Roz aprins',
    name: 'Vicky',
    description: 'Flori mici dar vii, roz aprins, extrem de prolifică.',
  },
  {
    image: emilia,
    type: 'Mușcată Zonală',
    color: 'Somon',
    name: 'Emilia',
    description: 'Nuanță caldă de somon, înflorire abundentă toată vara.',
  },
  {
    image: victor,
    type: 'Mușcată Curgătoare',
    color: 'Roșu-roz',
    name: 'Victor',
    description: 'Culoare vie roșu-roz, rezistentă la vânt și ploaie.',
  },
  {
    image: greta,
    type: 'Mușcată Zonală',
    color: 'Roz',
    name: 'Greta',
    description: 'Roz clasic, frunze decorative, potrivită pentru ghivece.',
  },
  {
    image: ellen,
    type: 'Mușcată Curgătoare',
    color: 'Roz pal',
    name: 'Ellen',
    description: 'Roz pastelat delicat, curgătoare cu înflorire continuă.',
  },
  {
    image: stefanie,
    type: 'Mușcată Zonală',
    color: 'Alb-roz',
    name: 'Stefanie',
    description: 'Petale alb-roz bicolore, rafinament și prospețime.',
  },
]

export default function Flowers() {
  return (
    <>
      <Navbar />
      <main>
        <FlowersInfo />
        <section className="flowers-grid-section">
          <div className="flowers-grid-section__container">
            <div className="flowers-grid-section__grid">
              {flowers.map((flower) => (
                <Flower
                  key={flower.name}
                  image={flower.image}
                  type={flower.type}
                  color={flower.color}
                  name={flower.name}
                  description={flower.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
