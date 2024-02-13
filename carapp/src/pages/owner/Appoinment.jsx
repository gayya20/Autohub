import React from "react";
import { useAuthContext } from '@asgardeo/auth-react';
import Button from '@mui/material/Button';


const Appoinment=()=>{
    const { state, signIn, signOut } = useAuthContext();

    return(
        <div  style={{fontSize:"50px"}}>
           My Appoinment

        </div>
    )
}

export default Appoinment