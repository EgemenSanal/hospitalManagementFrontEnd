import './fit.css'

function DataButton({ text }) {
  return (
    <button className="data-button">
      {text}
    </button>
  )
}

export default function GoogleFit() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Google Fit Data</h1>
      </header>
      
      <main className="main-content">
        <div className="buttons-grid">
          <DataButton text="Heart rate" />
          <DataButton text="Steps" />
          <DataButton text="Sleep" />
        </div>
        <div className="history-button-container">
          <DataButton text="History" />
        </div>
      </main>
    </div>
  )
}
