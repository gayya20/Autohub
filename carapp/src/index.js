import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "@asgardeo/auth-react";



const config = {
  signInRedirectURL: "http://localhost:3000/dashboard",
  signOutRedirectURL: "https://localhost:3000/",
  clientID: "gv2CJSnpYiUPmKDxt6ToF1lZJ8ka",
  baseUrl: "https://api.asgardeo.io/t/gayalrk",
  scope: ["openid", "profile"]
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
