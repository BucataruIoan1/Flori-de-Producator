import './Flower.css'

interface FlowerProps {
  image: string
  type: string
  color?: string
  name: string
  description: string
  animationDelay?: number
}

export default function Flower({ image, type, color, name, description, animationDelay }: FlowerProps) {
  return (
    <article
      className={`flower-card${animationDelay !== undefined ? ' animate-bloom' : ''}`}
      style={animationDelay !== undefined ? { animationDelay: `${animationDelay}s` } : undefined}
    >
      <div className="flower-card__image-wrap">
        <img
          src={image}
          alt={`Mușcată ${name}`}
          className="flower-card__image"
          loading="lazy"
          width={800}
          height={1000}
        />
      </div>
      <div className="flower-card__body">
        <div className="flower-card__meta">
          <span className="flower-card__type">{type}</span>
          {color && <span className="flower-card__color">{color}</span>}
        </div>
        <h2 className="flower-card__name">{name}</h2>
        <p className="flower-card__description">{description}</p>
      </div>
    </article>
  )
}
