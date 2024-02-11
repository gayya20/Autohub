import React, { useState, useEffect } from "react";
// import { Header } from "./Header";
import ButtonAppBar from "./ButtonAppBar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import service1 from "../assets/automiraj.jpg";
import service2 from "../assets/toyotaLanka.jpg";

import Fortune1 from "../assets/FORTUNER.jpg"
import Fortune2 from "../assets/LC-70.jpg"
import Fortune3 from "../assets/top-feature44.jpg"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { red } from '@mui/material/colors';
import Home from "../pages/admin/Home";
import { useAuthContext } from '@asgardeo/auth-react';
import Button from '@mui/material/Button';



const color = red[500];



const Dashboard = () => {const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = [Fortune1, Fortune2, Fortune3];
    const { state, signIn, signOut } = useAuthContext();

    useEffect(() => {
      const interval = setInterval(() => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      }, 5000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    const currentBackground = backgrounds[backgroundIndex];
  
    return (
      <>
        <ButtonAppBar />


        
        <div
          className="background"
          style={{
            marginTop:"-10px",
            height: "600px",
            width: "100%",
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-image 2s ease",
            position:"relative"
          }}
        >
<div
    style={{
      position: "absolute", // Position the text absolutely
      bottom: "90px", // Position the text 20px from the bottom
      left: "25%", // Center horizontally
      transform: "translateX(-50%)", // Adjust for centering
      color: "white",
    }}
  >
    <h1 style={{ marginBottom: "30px" ,fontSize:"60px"}}>Over 28 Years </h1>
    <h1 style={{ marginBottom: "30px" ,fontSize:"40px",fontWeight:"100"}}>Automotive service industry</h1>
    <h1 style={{ marginBottom: "30px" ,fontSize:"15px",fontWeight:"100"}}>Our island wide network covers a vast range of services empowered by modern and latest technologies.</h1>

  </div>
          </div>

        <div>
          <h2 style={{textAlign:"center",fontWeight:"100",fontSize:"50px"}}>Our service</h2>
        </div>
      <div style={{ fontSize: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="container m-4" style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 345, marginRight: "50px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={service1}
                alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Toyota Lanka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, marginRight: "50px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={service2}
                alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={service1}
                alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Fab color="black" aria-label="add">
        <AddIcon />
      </Fab>
        </div>
        <div>
            Contac us
        </div>
      </div>
      <Home/>
    </>
  );
}

export default Dashboard;
