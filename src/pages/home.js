import React from "react";
import { useHistory } from "react-router";
import { Typography, Button, Box } from "@mui/material";
import Navigation from "../components/navigation";

const Home = () => {
  const history = useHistory();

  const handleSwitch = () => {
    history.push("/switch");
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
        
        <Typography>Halooo ini home</Typography>
        <Navigation />
      </Box>
    </div>
  );
};
export default Home;
