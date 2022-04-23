import React from "react";
import { useHistory } from "react-router";
import { Typography, Button, Box } from "@mui/material";
import Navigation from "../components/navigation";
import TopController from "../components/topController";

const Budgeting = () => {
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
        <TopController />
        <Typography>Halooo ini budget</Typography>
      </Box>
    </div>
  );
};
export default Budgeting;
