import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 250,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  backgroundColor: "#f6f6f6",
  borderRadius: "10px",
  textAlign: 'center',

}));

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",


  // backgroundColor:"red"
};

export default function Dashboard() {
  return (
    <><h1 style={{ color: "black", fontWeight: "400", marginTop: "20px", marginLeft: "20px" }}>Dashboard</h1> <div className="container" style={containerStyle}>

      <Stack direction="row" spacing={2}>
        <DemoPaper square={false}>Car Owners
          <div>
            <h1 style={{ marginTop: "40px", fontSize: "70px" }}>40</h1>
          </div>
        </DemoPaper>


        <DemoPaper square>Service Provides
          <div>
            <h1 style={{ marginTop: "40px", fontSize: "70px" }}>7</h1>
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
    </div></>
  );
}
