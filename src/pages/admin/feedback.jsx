import { useEffect, useState } from 'react'
import './admin.css'
import { useNavigate } from 'react-router-dom'

export default function Feedbacks() {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const navigate = useNavigate()
    
  const [feedbacks, setFeedbacks] = useState([
    {
      id: "",
      text: '',
      from: ''
    }
  ])
  async function getFeedbacks(){
    const res = await fetch('/api/feedbacks',{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
    const data = await res.json()
    if(res.ok){
        setFeedbacks(data.feedbacks)
        console.log(data.feedbacks);
    }
}
async function handleDelete(memberId) {
    const confirmDelete = window.confirm("Are You Sure?");
    if (confirmDelete) {
      try {
        const res = await fetch(`/api/feedbacks/${memberId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            navigate('/')
        }
      } catch (error) {
        console.error("Error", error);
      }
    }
  }
useEffect(() => {
    getFeedbacks();
}, []);


  return (
    <div className="feedback-container">
      <header>
        <h1 className='title'>Feedbacks</h1>
      </header>

      <div className="feedbacks-list">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <div className="feedback-content">
              <p>FEEDBACK : {feedback.feedbackTitle}</p>
              <p className="feedback-from">FROM: {feedback.from}</p>
            </div>
            <button 
              className="delete-button"
              onClick={() => handleDelete(feedback.id)}
            >
              Delete Feedback
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
