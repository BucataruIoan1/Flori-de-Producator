import './Price.css'

interface PriceProps {
  label: string
  amount: number
}

export default function Price({ label, amount }: PriceProps) {
  return (
    <div className="price-row">
      <span className="price-row__label">{label}</span>
      <span className="price-row__amount">{amount} RON</span>
    </div>
  )
}
