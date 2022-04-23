import React from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button, Box } from "@mui/material";
import Navigation from "../components/navigation";

const Riwayat = () => {
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
        <Typography>Halooo ini riwayat</Typography>
        <Navigation />
      </Box>
    </div>
  );
};
export default Riwayat;
