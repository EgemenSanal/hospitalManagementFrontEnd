import { Header } from '../Header/Header'
import { PriceDisplay } from './PriceDisplay'
import { PaymentActions } from './PaymentActions'
import './PaymentPage.css'

export function PaymentPage() {
  return (
    <div className="container">
      <Header />
      <main className="payment-content">
        <PriceDisplay amount={50} />
        <PaymentActions />
      </main>
    </div>
  )
}