import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout, HomePage } from "./components";
import About from './components/About.js';
import Dashboardview from './components/Dashboardview.js';
import Contacus from './components/Contacus.js';
import Dashboard from './components/Dashboard.jsx';

function App() {  

  const { state, signIn, signOut } = useAuthContext();
  const root = ReactDOM.createRoot(document.getElementById('root'));

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/contacus" element={<Contacus/>}/>

        
      </Routes>
    </BrowserRouter>     

    </div>
  );
}

export default App;
