import './OtherPrice.css'

interface OtherPriceProps {
  label: string
  amount: number
}

export default function OtherPrice({ label, amount }: OtherPriceProps) {
  return (
    <div className="other-price-row">
      <span className="other-price-row__label">{label}</span>
      <span className="other-price-row__amount">{amount} RON</span>
    </div>
  )
}
