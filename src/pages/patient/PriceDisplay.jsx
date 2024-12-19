import './PriceDisplay.css'

export function PriceDisplay({ amount }) {
  return (
    <div className="price-container">
      <h2 className="price-title">Price</h2>
      <div className="price-amount">
        <span className="currency">$</span>
        <span className="amount">{amount}</span>
      </div>
    </div>
  )
}