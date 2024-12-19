import './PaymentForm.css'

export function PaymentForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cardNumber">Credit card number</label>
        <input
          id="cardNumber"
          type="text"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="cardHolder">Card holder</label>
        <input
          id="cardHolder"
          type="text"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="expiryDate">Expiry date</label>
        <input
          id="expiryDate"
          type="text"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="securityCode">Security code</label>
        <input
          id="securityCode"
          type="text"
          className="form-input"
        />
      </div>

      <div className="form-buttons">
        <button type="button" className="btn btn-secondary">Cancel</button>
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </form>
  )
}