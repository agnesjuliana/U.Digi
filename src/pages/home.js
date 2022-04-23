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
          backgroundColor: "#e5e5e5",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#008AEC",
            padding: "40px 0px 16px 36px",
            borderRadius: "0px 0px 24px 24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "12px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Total Saldo
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "32px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Rp1.000.000
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontFamily: "poppins",
              backgroundColor: "#139DFF",
              borderRadius: "10px",
              boxShadow: "none",
              fontSize: "10px",
              marginTop: "8px",
              marginBottom: "8px"
            }}
          >
            Lihat Semua
          </Button>
          <Box sx={{backgroundColor: "#ffffff", padding: "8px", maxWidth: "156px", borderRadius: "8px"}}>
            
          </Box>
        </Box>
        <Navigation />
      </Box>
    </div>
  );
};
export default Home;
