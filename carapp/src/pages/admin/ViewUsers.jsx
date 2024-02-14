import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonAppBar from "../../components/ButtonAppBar";
import EditUser from "../../pages/admin/EditUsers"; // Import the Dashboard component

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [showEditUser, setShowEditUser] = useState(false); // State to control the display of the EditUser

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://ff614023-7da2-43af-bfd7-b04d043df9d4-dev.e1-us-east-azure.choreoapis.dev/cdey/backend/carapp-rest-endpoint-5c6/v1.0/getUser");
    setUsers(result.data);
  };

  const handleUpdateClick = () => {
    // Perform the update logic here
    // For demonstration purposes, just set showEditUser to true
    setShowEditUser(true);
  };
  const deleteUser = async (id) => {
    await axios.delete(`https://ff614023-7da2-43af-bfd7-b04d043df9d4-dev.e1-us-east-azure.choreoapis.dev/cdey/backend/carapp-rest-endpoint-5c6/v1.0/user/${id}`);
    loadUsers();
  };



  return (
    <>
      {showEditUser ? ( // Conditionally render the EditUser component
        <EditUser />
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
                        <button className="btn btn-danger mx-2" 
                            onClick={() => deleteUser(user.id)}
                        >Delete</button>
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
