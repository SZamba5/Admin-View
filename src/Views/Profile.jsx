import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the profile page content.</p>

      {/* Add a Home button that links to the admin view */}
      <Link to="/" className="banner-btn">Home</Link>
    </div>
  );
}

export default Profile;

