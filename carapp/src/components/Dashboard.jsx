import React, { useState, useEffect } from "react";
import ButtonAppBar from "./ButtonAppBar";
import Typography from '@mui/material/Typography';
import axios from "axios";
import Fortune1 from "../assets/FORTUNER.jpg"
import Fortune2 from "../assets/LC-70.jpg"
import Fortune3 from "../assets/top-feature44.jpg"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import image from "../assets/serviceP1.jpg"
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import checklist from "../assets/checklist.png"
import mechanical from "../assets/mechanical.png"
import car_service from "../assets/car-service.png"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 250,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  backgroundColor: "#f6f6f6",
  borderRadius: "10px",
  textAlign: "center",
}));

const Dashboard = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [openModals, setOpenModals] = useState([]);
  const [appointmentFormData, setAppointmentFormData] = useState({});
  const [isAppointmentModal, setIsAppointmentModal] = useState(false);

  useEffect(() => {
    loadServiceProviders();
  }, []);

  const loadServiceProviders = async () => {
    try {
      const result = await axios.get("http://localhost:8080/serviceProviders");
      setServiceProviders(result.data);
      // Initialize openModals with false values for each provider
      setOpenModals(new Array(result.data.length).fill(false));
    } catch (error) {
      console.error("Error loading service providers:", error);
    }
  };

  const handleViewDetails = (index) => {
    setOpenModals((prevOpenModals) => prevOpenModals.map((val, i) => (i === index ? true : val)));
    setIsAppointmentModal(false);
  };

  const handleAppointment = (index) => {
    setAppointmentFormData({ provider: serviceProviders[index], selectedService: '', date: '', time: '' });
    setOpenModals((prevOpenModals) => prevOpenModals.map((val, i) => (i === index ? true : val)));
    setIsAppointmentModal(true);
  };

  const handleCloseModal = (index) => {
    setOpenModals((prevOpenModals) => prevOpenModals.map((val, i) => (i === index ? false : val)));
  };

  // Handle change for appointment form fields
  const handleAppointmentFormChange = (event) => {
    const { name, value } = event.target;
    setAppointmentFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitAppointment = () => {
    // Add logic to handle appointment submission
    console.log("Appointment Form Data:", appointmentFormData);
    // Add logic to submit appointment data to backend or perform other actions
    // You can also close the modal or reset form data after submission
  };

  const backgrounds = [Fortune1, Fortune2, Fortune3];
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(backgrounds[backgroundIndex]);

  useEffect(() => {
    setCurrentBackground(backgrounds[backgroundIndex]);
  }, [backgroundIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      {/* <ButtonAppBar /> */}
      <div
        className="background"
        style={{
          marginTop: "-10px",
          height: "600px",
          width: "100%",
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 2s ease",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "90px",
            left: "25%",
            transform: "translateX(-50%)",
            color: "white",
          }}
        >
          <h1 style={{ marginBottom: "30px", fontSize: "60px" }}>Over 28 Years </h1>
          <h1 style={{ marginBottom: "30px", fontSize: "40px", fontWeight: "100" }}>Automotive service industry</h1>
          <h1 style={{ marginBottom: "30px", fontSize: "15px", fontWeight: "100" }}>Our island wide network covers a vast range of services empowered by modern and latest technologies.</h1>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: "center", fontWeight: "500", fontSize: "70px", marginTop: "60px", marginBottom: "60px" }}>Our service</h2>
      </div>
      <div style={{ height: "60vh", width: "100%", backgroundColor: "#e3e1e1", display: "flex" }}>
        <div style={{ backgroundColor: "", width: "500px", height: "500px", margin: "0 auto", textAlign: "center", marginTop: "100px" }}>
          <img src={mechanical} alt="AutoHub Logo" style={{ width: "150px", height: "150px", display: "block", margin: "auto" }} />
          <h1>Car mechanical</h1>
        </div>
        <div style={{ backgroundColor: "", width: "500px", height: "500px", margin: "0 auto", textAlign: "center", marginTop: "100px" }}>
          <img src={checklist} alt="AutoHub Logo" style={{ width: "150px", height: "150px", display: "block", margin: "auto" }} />
          <h1>Full Sacn</h1>
        </div>
        <div style={{ backgroundColor: "", width: "500px", height: "500px", margin: "0 auto", textAlign: "center", marginTop: "100px" }}>
          <img src={car_service} alt="AutoHub Logo" style={{ width: "150px", height: "150px", display: "block", margin: "auto" }} />
          <h1>Car Wash</h1>
        </div>
      </div>
      <div style={{ fontSize: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>
          <h2 style={{ textAlign: "center", fontWeight: "500", fontSize: "70px", marginTop: "60px", marginBottom: "60px" }}>Our service Providers</h2>
        </div>
        <div>
          <div style={{ backgroundColor: "#80808012", width: "100%", height: "auto", margin: "0px", padding: "50px", display: "flex", flexWrap: "wrap" }}>
            {serviceProviders.map((provider, index) => (
              <Card key={provider.id} sx={{ maxWidth: 400, margin: "10px", backgroundColor: "black", color: "#ff4a09" }}>
                <CardMedia
                  component="img"
                  alt={provider.name}
                  height="150"
                  image={image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {provider.name}
                  </Typography>
                  <Typography variant="body2" color="white">
                    Address: {provider.address}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    Email: {provider.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" onClick={() => handleViewDetails(index)} style={{ backgroundColor: "#ff4a09", width: "60px", height: "40px" }}>View</Button>
                  <Button variant="contained" onClick={() => handleAppointment(index)} style={{ backgroundColor: "#ff4a09", width: "110px", height: "40px" }}>Appointment</Button>
                </CardActions>

                <Modal
                  open={openModals[index]}
                  onClose={() => handleCloseModal(index)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  key={provider.id}
                >
                  <div
                    style={{
                      backgroundColor: "rgb(255 255 255 / 90%)",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 600,
                      height: 600,
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      p: 4,
                      borderRadius:"10px"
                    }}
                  >
                    <Typography id="modal-modal-title" variant="" component="h2" sx={{ textAlign: "center", fontSize: "20px" }}>
                      {isAppointmentModal ? "Make an Appointment" : "Service Provider Details"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 ,borderRadius:"20px"}}>
                      {isAppointmentModal ? (
                        <>
                          <Box sx={{ minWidth: 60, textAlign: "center",borderRadius:"20px" }}>
                            
                <div className="col-md-14 offset-md-3 border rounded p-5 mt-7" style={{ backgroundColor: "", marginLeft: "auto", marginRight: "auto" }}>
                  <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        name="name"
                        // value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label htmlFor="vehicleNumber" className="col-sm-3 col-form-label">
                      Vehicle Number
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Vehicle Number"
                        name="vehicleNumber"
                        // value={formData.vehicleNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

  <div className="mb-3 row">
    <label htmlFor="service" className="col-sm-3 col-form-label">
      Service
    </label>
    <div className="col-sm-9">
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="service-select-label">Service Type</InputLabel>
        <Select
          labelId="service-select-label"
          id="service-select"
          name="selectedService"
          value={appointmentFormData.selectedService}
          label="Service Type"
          onChange={handleAppointmentFormChange}
        >
          <MenuItem value="Full Body Wash">Full Body Wash</MenuItem>
          <MenuItem value="Mechanical">Mechanical</MenuItem>
          <MenuItem value="Full Scan">Full Scan</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div>
</div>

                            {/* Add more form fields for date, time, etc. */}
                          </Box>
                          <Button variant="contained" onClick={handleSubmitAppointment} style={{ backgroundColor: "#ff4a09", width: "150px", height: "40px", marginLeft: "50px", marginTop: "100px",marginRight:"" }}>Submit</Button>
                        </>
                      ) : (
                        <>
                          <CardMedia
                            component="img"
                            alt={provider.name}
                            height="260"
                            width="10"
                            image={image}
                            sx={{ marginTop: "-10px" }}
                          />
                          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            {provider.name}
                          </Typography>
                          <Typography variant="body2" style={{ color: "black", fontWeight: "bold", marginLeft: "50px" }}>
                            Email: {provider.email}
                          </Typography>
                          <Typography variant="body2" style={{ color: "black", fontStyle: "italic", marginLeft: "50px" }}>
                            Number: {provider.number}
                          </Typography>
                          <Typography variant="body2" style={{ color: "black", fontStyle: "italic", marginLeft: "50px" }}>
                            Description: {provider.discription}
                          </Typography>
                        </>
                      )}
                    </Typography>
                  </div>
                </Modal>

              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
