import OtherPrice from '@/components/OtherPrice/OtherPrice'
import './OtherPriceBox.css'

const otherItems = [
  { label: 'Răsad pahar 9 cm', amount: 10 },
  { label: 'Răsad pahar 10,5 cm', amount: 12 },
  { label: 'Floare la ghiveci agățător', amount: 30 },
  { label: 'Jardiniere 30 cm', amount: 20 },
  { label: 'Jardiniere 50 cm', amount: 25 },
  { label: 'Jardiniere 70 cm', amount: 30 },
]

export default function OtherPriceBox() {
  return (
    <article className="other-price-box">
      <h2 className="other-price-box__title">Altele</h2>
      <div className="other-price-box__list">
        {otherItems.map((item) => (
          <OtherPrice key={item.label} label={item.label} amount={item.amount} />
        ))}
      </div>
    </article>
  )
}
