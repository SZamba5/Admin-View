// src/Profile.js
import React from 'react';

function Profile() {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    joinedDate: 'January 1, 2022',
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Joined Date:</strong> {user.joinedDate}</p>
      </div>
    </div>
  );
}

export default Profile;
