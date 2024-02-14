import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "@asgardeo/auth-react";



const config = {
  signInRedirectURL: "https://8f27410d-7632-46cf-bfc8-85955ca18575.e1-us-east-azure.choreoapps.dev",
  signOutRedirectURL: "https://8f27410d-7632-46cf-bfc8-85955ca18575.e1-us-east-azure.choreoapps.dev",
  clientID: "gv2CJSnpYiUPmKDxt6ToF1lZJ8ka",
  baseUrl: "https://api.asgardeo.io/t/gayalrk",
  scope: ["openid", "profile","app_roles"]
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const MyApp = () => {
  return (
    
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  );
}

root.render(<MyApp />);
