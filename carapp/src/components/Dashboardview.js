import React from "react";
import backgroundImage from "../assets/car1.jpg"; // Replace with your image file
import { useAuthContext } from "@asgardeo/auth-react";
import Button from '@mui/material/Button';



export const Dashboardview=(props)=> {
    const {
        isAuthenticated,
        loginButton
      } = props;

    const { state, signIn, signOut } = useAuthContext();

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${backgroundImage})`, // Adding gradient overlay
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  };

  return (
    <div style={backgroundImageStyle}>
        

      <div>
            <div className="top" style={{marginRight:"800px",marginBottom:"150px",fontWeight:"2"}}>
                <h1 style={{color:"white",fontWeight:"1",fontSize:"60px",marginLeft:"20px"}}>
                    Welcome to <span style={{fontWeight:"500",fontSize:"100px"}}>auto Hub</span>
                </h1>
                <h2 style={{color:"gray",fontWeight:"1",fontSize:"20px",marginLeft:"30px"}}>Our dedicated team is committed to delivering top-notch services, ensuring your vehicles are in optimal condition for the road ahead.</h2>
                <Button variant="contained" onClick={ () => signIn() } style={{backgroundColor:"red",marginLeft:"30px",marginTop:"30px",width:"200px",height:"40px"}}>Get Started</Button>


            </div>

      </div>
      <div>
        {/* More content goes here */}
      </div>
    </div>
  );
}

export default Dashboardview;
