import NavBar from '../navbar/Navbar';
import React, { useState, useCallback } from 'react';
import Appoinment from "../../pages/owner/Appoinment"
import Dashboard from '../../components/Dashboard';

const OwnerSideBar = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleIconClick = useCallback((index) => {
    if (index === 0) {
        console.log("hellow world");
      setActiveComponent(<Dashboard/>);
    } else if (index === 1) {
      setActiveComponent(<Appoinment />);
    

    }
  }, []);

  return (
    <>      
      <NavBar onIconClick={handleIconClick} />
      <div >
          {activeComponent}

      </div>
    </>
  );
}

export default OwnerSideBar;
