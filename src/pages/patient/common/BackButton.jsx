import './BackButton.css'

export function BackButton() {
  const handleBack = () => {
    // Handle navigation back
    console.log('Navigating back')
  }

  return (
    <button 
      className="back-button"
      onClick={handleBack}
    >
      Back
    </button>
  )
}