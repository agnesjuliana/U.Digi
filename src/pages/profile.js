import React from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button, Box } from "@mui/material";
import Navigation from "../components/navigation";

const Profile = () => {
  const history = useHistory();

  const handleHome = () => {
      history.push("/")
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "480px",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <Box sx={{display:'flex', flexDirection:'column'}}>

        </Box>
        
        <Navigation />
      </Box>
    </div>
  );
};
export default Profile;
