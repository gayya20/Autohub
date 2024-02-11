import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonAppBar from "../../components/ButtonAppBar";
import Dashboard from "../../pages/admin/Dashboard"; // Import the Dashboard component

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false); // State to control the display of the Dashboard

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getUser");
    setUsers(result.data);
  };

  const handleUpdateClick = () => {
    // Perform the update logic here
    // For demonstration purposes, just set showDashboard to true
    setShowDashboard(true);
  };

  return (
    <>
      {showDashboard ? ( // Conditionally render the Dashboard component
        <Dashboard />
      ) : (
        <>
          <h1 style={{ color: "black", fontWeight: "400", marginTop: "20px", marginLeft: "20px" }}>View Users</h1>
          <div className="container" style={{ textAlign: "center" }}>
            <div className="py-4">
              <table className="table border shadow">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}> {/* Add key prop to each mapped element */}
                      <th scope="row">{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="btn btn-primary mx-2">View</button>
                        <button className="btn btn-outline-primary mx-2" onClick={handleUpdateClick}>Update</button> {/* Call handleUpdateClick on button click */}
                        <button className="btn btn-danger mx-2">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}
