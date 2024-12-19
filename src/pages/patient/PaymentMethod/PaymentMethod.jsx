import { PaymentForm } from './PaymentForm'
import './PaymentMethod.css'

export function PaymentMethod() {
  return (
    <div className="container">
      <main className="payment-method-content">
        <h2 className="payment-method-title">Save Payment Method</h2>
        <PaymentForm />
      </main>
    </div>
  )
}