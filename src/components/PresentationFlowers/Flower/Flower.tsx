import './Flower.css'

interface FlowerProps {
  image: string
  type: string
  name: string
  description: string
  animationDelay?: number
}

export default function Flower({ image, type, name, description, animationDelay = 0 }: FlowerProps) {
  return (
    <article
      className="flower animate-bloom"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="flower__imageWrap">
        <img
          src={image}
          alt={`Mușcată ${name}`}
          className="flower__image"
          loading="lazy"
          width={800}
          height={1000}
        />
      </div>
      <div className="flower__body">
        <p className="flower__type">{type}</p>
        <h3 className="flower__name">{name}</h3>
        <p className="flower__description">{description}</p>
      </div>
    </article>
  )
}
