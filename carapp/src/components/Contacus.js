import React from "react";
import { useAuthContext } from '@asgardeo/auth-react';
import Button from '@mui/material/Button';


const Contacus=()=>{
    const { state, signIn, signOut } = useAuthContext();

    return(
        <div  style={{fontSize:"50px"}}>
            Contacus

        </div>
    )
}

export default Contacus