import './PrescriptionItem.css'

export function PrescriptionItem({ prescription }) {
  const { medication, dosage, frequency, startDate, endDate } = prescription

  return (
    <div className="prescription-item">
      <div className="prescription-header">
        <h3 className="medication-name">{medication}</h3>
        <span className="dosage">{dosage}</span>
      </div>
      <div className="prescription-details">
        <p className="frequency">Frequency: {frequency}</p>
        <p className="dates">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  )
}