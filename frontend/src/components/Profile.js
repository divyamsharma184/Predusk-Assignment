import React from 'react';

const Profile = () => {
  return (
    <section className="section">
      <h2>Profile</h2>
      <div className="profile-info">
        <div className="profile-item">
          <h3>Name</h3>
          <p>Divyam Sharma</p>
        </div>
        
        <div className="profile-item">
          <h3>Email</h3>
          <p>divyamsharma184@gmail.com</p>
        </div>
        
        <div className="profile-item">
          <h3>Education</h3>
          <p>Information Technology, Manipal University Jaipur</p>
        </div>
        
        <div className="profile-item">
          <h3>GitHub</h3>
          <a href="https://github.com/divyamsharma184" target="_blank" rel="noopener noreferrer">
            https://github.com/divyamsharma184
          </a>
        </div>
        
        <div className="profile-item">
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/divyamsharma184" target="_blank" rel="noopener noreferrer">
            https://linkedin.com/in/divyamsharma184
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
