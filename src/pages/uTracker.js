import React from "react";
import { Box } from "@mui/material";
import TopController from "../components/topController";
import Track1 from '../../src/assets/Group 444.png'
import Track2 from '../../src/assets/Group 445.png'

const uTracker = () => {

  const handleHome = () => {
    window.location="/";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          width: "480px",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <TopController
          title="U.Tracker"
          action={() => handleHome()}
        />

        <center><img style={{width:"90%", marginTop:"24px"}} src={Track1}/></center>
        <center><img style={{width:"90%", marginTop:"16px"}} src={Track2}/></center>
        <center><img style={{width:"90%", marginTop:"24px"}} src={Track1}/></center>
      </Box>
    </div>

  );
};
export default uTracker;
