import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../assets/serviceP1.jpg"

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 250,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  backgroundColor: "#f6f6f6",
  borderRadius: "10px",
  textAlign: "center",
}));

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
  // backgroundColor:"red"
};

export default function Dashboard() {
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    loadServiceProviders();
  }, []);

  const loadServiceProviders = async () => {
    try {
      const result = await axios.get("https://ff614023-7da2-43af-bfd7-b04d043df9d4-dev.e1-us-east-azure.choreoapis.dev/cdey/backend/carapp-rest-endpoint-5c6/v1.0/serviceProviders");
      setServiceProviders(result.data);
    } catch (error) {
      console.error("Error loading service providers:", error);
    }
  };

  const handleDeleteProvider = async (providerId) => {
    try {
      await axios.delete(`https://ff614023-7da2-43af-bfd7-b04d043df9d4-dev.e1-us-east-azure.choreoapis.dev/cdey/backend/carapp-rest-endpoint-5c6/v1.0/serviceProviders/${providerId}`);
      // Remove the deleted provider from the state
      setServiceProviders(serviceProviders.filter(provider => provider.id !== providerId));
      console.log("Provider deleted successfully");
    } catch (error) {
      console.error("Error deleting provider:", error);
    }
  };

  return (
    <>
      <h1 style={{ color: "black", fontWeight: "400", marginTop: "20px", marginLeft: "20px" }}>Dashboard</h1>
      <div className="container" style={containerStyle}>
        <Stack direction="row" spacing={2}>
          <DemoPaper square={false}>Car Owners
            <div>
              <h1 style={{ marginTop: "40px", fontSize: "70px" }}>40</h1>
            </div>
          </DemoPaper>
          <DemoPaper square>Service Providers
            <div>
              <h1 style={{ marginTop: "40px", fontSize: "70px" }}>{serviceProviders.length}</h1>
            </div>
          </DemoPaper>
          <DemoPaper square>Request
            <div>
              <h1 style={{ marginTop: "40px", fontSize: "70px" }}>10</h1>
            </div>
          </DemoPaper>
          <DemoPaper square>Income
            <div>
              <h1 style={{ marginTop: "40px", fontSize: "60px", color: "darkorange" }}>120,370</h1>
            </div>
          </DemoPaper>
        </Stack>
      </div>
      <div style={{ backgroundColor: "#80808012", width: "100%", height: "auto", margin: "0px", padding: "50px", display: "flex", flexWrap: "wrap" }}>
        {serviceProviders.map(provider => (
          <Card key={provider.id} sx={{ maxWidth: 400, margin: "10px" ,backgroundColor:"black",color:"#ff4a09"}}>
            <CardMedia
              component="img"
              alt={provider.name}
              height="150"
              image={image} // Assuming you have an image field in your service provider data
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
            <Button variant="contained" style={{backgroundColor:"#ff4a09",width:"60px",height:"40px"}}>View</Button>

            <Button
                    variant="contained"
                    onClick={() => handleDeleteProvider(provider.id)}
                    style={{ backgroundColor: "#ff4a09", width: "60px", height: "40px" }}
                    >
                    Delete
                    </Button>
             
          </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
