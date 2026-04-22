import Price from '@/components/Price/Price'
import './PriceBox.css'

export type PriceBoxVariant = 'rasad' | 'ghivece'

interface PriceBoxProps {
  variant: PriceBoxVariant
}

const rasadItems = [
  { label: '30 cm + 2 răsaduri', amount: 40 },
  { label: '50 cm + 3 răsaduri', amount: 65 },
  { label: '70 cm + 4 răsaduri', amount: 90 },
]

const ghiveceItems = [
  { label: '30 cm + 2 ghivece', amount: 65 },
  { label: '50 cm + 3 ghivece', amount: 100 },
  { label: '70 cm + 4 ghivece', amount: 130 },
]

export default function PriceBox({ variant }: PriceBoxProps) {
  const items = variant === 'rasad' ? rasadItems : ghiveceItems
  const title =
    variant === 'rasad'
      ? 'Jardiniere cu răsad, pământ și îngrășământ'
      : 'Jardiniere cu flori din ghivece cu agățător'

  return (
    <article className="price-box">
      <h2 className="price-box__title">{title}</h2>
      <div className="price-box__list">
        {items.map((item) => (
          <Price key={item.label} label={item.label} amount={item.amount} />
        ))}
      </div>
      <p className="price-box__note">Preț fără jardiniere</p>
    </article>
  )
}
