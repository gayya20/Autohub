import React, { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import ViewUser from "./ViewUsers"; // Import the ViewUser component

export default function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const [showView, setShowView] = useState(false); // State to control the display of the Dashboard
  const [showCancelButton, setShowCancelButton] = useState(true); // State to control the display of the Cancel button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://ff614023-7da2-43af-bfd7-b04d043df9d4-dev.e1-us-east-azure.choreoapis.dev/cdey/backend/carapp-rest-endpoint-5c6/v1.0/addUser", formData);
      console.log("Data added successfully:", response.data);
      setShowView(true);
      setShowCancelButton(false); // Hide the Cancel button after submission
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleCancelClick = () => {
    setShowView(true); // Show the ViewUser component when Cancel is clicked
    setShowCancelButton(false); // Hide the Cancel button after clicking it
  };

  return (
    <>
      {showView ? (
        <ViewUser />
      ) : (
        <>
          <h1 style={{ color: "black", fontWeight: "400", marginTop: "20px", marginLeft: "20px" }}>Register Form</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <form onSubmit={handleSubmit}>
                  <h1 className="text-center m-4">Register Form</h1>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your User Name"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-outline-primary" type="submit">Submit</button>
                    {showCancelButton && ( // Render Cancel button conditionally
                      <button className="btn btn-outline-danger mx-2" onClick={handleCancelClick}>Cancel</button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}