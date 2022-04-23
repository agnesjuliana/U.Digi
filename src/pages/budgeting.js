import React from "react";
import { useHistory } from "react-router";
import { Typography, Box } from "@mui/material";
import TopController from "../components/topController";

const Budgeting = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
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
        <TopController
          title="Atur Budget"
          action={() => handleHome()}
        />
        <div style={{padding: "24px 16px 0px 16px"}}>
          <p>halo</p>
        </div>
      </Box>
    </div>
  );
};
export default Budgeting;
