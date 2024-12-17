import '../../App.css'

export default function Profile() {
  const profile = {
    name: 'John',
    surname: 'Doe',
    role: 'Admin',
    birthday: '21/04/2003',
    email: 'employee@example.com',
    phoneNumber: '555-123-4567',
    location: 'Kaunas,Lithuania',
    office: 'Kaunas Office'
  }

  return (
    <form>
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-circle"></div>
          <div className="avatar-icon"></div>
        </div>
        <div className="profile-name">
          <h2>{`${profile.name} ${profile.surname}`}</h2>
          <p>{profile.role}</p>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-field">
          <label>Name</label>
          <input type="text"/>
        </div>
        <div className="profile-field">
          <label>Surname</label>
          <input type="text" />
        </div>
        <div className="profile-field">
          <label>Role</label>
          <input type="text"/>
        </div>
        <div className="profile-field">
          <label>Birthday</label>
          <input type="text"/>
        </div>
        <div className="profile-field">
          <label>E-mail</label>
          <input type="email"/>
        </div>
        <div className="profile-field">
          <label>Phone Number</label>
          <input type="tel"/>
        </div>
        <div className="profile-field">
          <label>Location</label>
          <input type="text"/>
        </div>
        <div className="profile-field">
          <label>Office</label>
          <input type="text" />
        </div>
      </div>

      <button className="edit-button">Edit</button>
    </div>
    </form>
  )
}

