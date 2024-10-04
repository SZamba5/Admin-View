import React, { useEffect, useState } from 'react';
import { db } from './firebase'; // Import Firestore db
import { collection, getDocs } from 'firebase/firestore';
import CameraFeed from './Views/CameraFeed';
import Profile from './Views/Profile'; // Import the Profile component
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [vehicles, setVehicles] = useState([]); // State to hold vehicle data

  // Fetch data from Firestore when the component mounts
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'vehicles'));
        const vehicleData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() 
        }));
        setVehicles(vehicleData);
      } catch (error) {
        console.error('Error fetching vehicles: ', error);
      }
    };

    fetchVehicles(); 
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define a route for the main page */}
          <Route
            path="/"
            element={
              <>
                {/* Admin banner */}
                <div className="admin-banner">
                  <span>Admin View</span>
                  <div className="banner-buttons">
                    <Link to="/profile" className="banner-btn">Profile</Link>
                  </div>
                </div>

                {/* CameraFeed component */}
                <CameraFeed />

                {/* Data Table */}
                <div className="data-table">
                  <h2>Vehicles List</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicles.length > 0 ? (
                        vehicles.map((vehicle) => (
                          <tr key={vehicle.id}>
                            <td>{vehicle.id}</td>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.status}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            }
          />
          
          {/* Define a separate route for the Profile page */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
