import { useContext, useEffect, useState } from 'react';
import './admin.css';
import { AppContext } from '../../Context/AppContext';

export default function EmergencyResponse() {
  const { token } = useContext(AppContext);

  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [responseText, setResponseText] = useState([{
    Response:''
  }]);

  // Fetch Emergency Responses
  async function getEmergencyResponse() {
    const res = await fetch('/api/emergency-responses', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setMessages(data.emergency);
    }
  }

  useEffect(() => {
    getEmergencyResponse();
  }, []);

  // Open Modal for the selected message
  function handleResponseClick(message) {
    setSelectedMessage(message);
    setResponseText(''); // Clear previous input
    setShowModal(true);
  }

  // Handle API Update Response
  async function handleSubmitResponse() {
    if (!responseText.trim()) return;

    const res = await fetch(`/api/emergency-responses/${selectedMessage.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ Response: responseText }),
    });

    if (res.ok) {
      const updatedMessages = messages.map((msg) =>
        msg.id === selectedMessage.id ? { ...msg, response: responseText } : msg
      );
      setMessages(updatedMessages); // Update state with the new response
      setShowModal(false); // Close modal
    } else {
      console.error('Failed to update response');
    }
  }

  return (
    
    <div className="feedback-container">
      <header>
        <h1 className="title">Emergency Messages From Doctors</h1>
      </header>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Respond to Message</h2>
            <textarea
              placeholder="Write your response here..."
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleSubmitResponse}>Submit</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className="feedbacks-list">
        {messages.map((message) => (
          <div key={message.id} className="feedback-card">
            <div className="feedback-content">
              <p>{message.EmergencyMessage}</p>
              <p className="feedback-from">FROM: {message.from}</p>
              <p className="feedback-from">Response: {message.Response || 'No Response Yet'}</p>
            </div>
            <button className="delete-button" onClick={() => handleResponseClick(message)}>
              Response
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
