import './InsuranceForm.css'

export function InsuranceForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <form className="insurance-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="insurance">Insurance company</label>
        <input
          id="insurance"
          type="text"
          placeholder="fill in the blank"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="policy">Policy number</label>
        <input
          id="policy"
          type="text"
          placeholder="fill in the blank"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="group">Group number</label>
        <input
          id="group"
          type="text"
          placeholder="fill in the blank"
          className="form-input"
        />
      </div>

      <div className="form-buttons">
        <button type="button" className="btn btn-secondary">Back</button>
        <button type="submit" className="btn btn-primary">Enter</button>
      </div>
    </form>
  )
}