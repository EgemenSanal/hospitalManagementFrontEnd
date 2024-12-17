import { useContext, useEffect, useState } from 'react'
import './admin.css'
import { AppContext } from '../../Context/AppContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ManageUser() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [members, setMembers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  })

  async function getUsers() {
    const res = await fetch(`/api/user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      console.log(data.members);
      setMembers(data.members);
    } else {
      console.log("Error");
    }
  }

  async function handleDelete(memberId) {
    const confirmDelete = window.confirm("Are You Sure?");
    if (confirmDelete) {
      try {
        const res = await fetch(`/api/user/${memberId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setMembers((prevMembers) => prevMembers.filter(member => member.id !== memberId));
          console.log("User deleted successfully");
        } else {
          console.error("Error", data.message || "Unknown Error");
        }
      } catch (error) {
        console.error("Error", error);
      }
    }
  }

  function openModal(member) {
    setFormData(member);
    setShowModal(true);
  }

  function closeModal() {
    setFormData({
      name: '',
      email: '',
      password: '',
      role: ''
    });
    setShowModal(false);
  }

  async function handleUpdate() {
    try {
      const res = await fetch(`/api/user/${formData.id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setMembers((prevMembers) =>
          prevMembers.map((member) => (member.id === formData.id ? formData : member))
        );
        closeModal();
      } else {
        console.error("Error", data.message || "Unknown Error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1>Manage Users</h1>
      <div className="results-section">
        <div className="users-list">
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Update User</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
                  <label className="custom-label">
                    Name:
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </label>
                  <label className="custom-label">
                    Email:
                    <input
                      type="text"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </label>
                  <label className="custom-label">
                    User ID: {formData.id}
                  </label>
                  <label className="custom-label">
                    Role:
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </label>
                  <label className="custom-label">
                    Password:
                    <input
                      type="password"
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </label>
                  <br />

                  <button type="submit" className="btn">Update</button>
                </form>
              </div>
            </div>
          )}
          {members.length > 0 ? members.map(member => (
            <div key={member.id} className="user-card">
              <div className="user-info">
                <div className="avatar">
                  {/* Placeholder avatar icon */}
                  👤
                </div>
                <div className="user-details">
                  <h3>{member.name}</h3>
                  <p>User ID = {member.id}</p>
                </div>
              </div>
              <div className="user-actions">
                <button
                  className="btn manage"
                  onClick={() => openModal(member)}
                >
                  Update Info
                </button>
                <button
                  className="btn delete"
                  onClick={() => handleDelete(member.id)}
                >
                  Delete User
                </button>
              </div>
            </div>
          )) : <p>There are no users</p>}
        </div>
      </div>
    </div>
  );
}
