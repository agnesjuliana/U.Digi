import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Typography,
  Button,
  Box,
  Grid,
  IconButton,
  CardMedia,
} from "@mui/material";
import Navigation from "../components/navigation";
import linkAja from "../assets/linkaja.png";
import gopay from "../assets/gopay.png";
import TopController from "../components/topController";

import PayCard from '../assets/paycard.png'
import PayList from '../assets/paylist.png'


const Pay = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false)

  const handleHome = () => {
    window.location = '/'
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
          backgroundColor: "#F4F4F4",
          minHeight: "100vh",
        }}
      >

        <TopController
          title="U.Pay"
          action={() => handleHome()}
        />

        {/* saldo field */}
        <Box
          sx={{
            backgroundColor: "#008AEC",
            padding: "30px 0 30px 20px",
            borderRadius: "16px",
            margin:3
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
              marginBottom: "8px",
            }}
          >
            Lihat Semua
          </Button>

          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "10px",
                maxWidth: "156px",
                borderRadius: "8px",
                display: "flex",
                marginRight: "16px",
              }}
            >
              <img src={linkAja} style={{ width: "36px" }} ></img>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "8px",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Total Saldo
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                >
                  Rp600.000
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "10px",
                maxWidth: "156px",
                borderRadius: "8px",
                display: "flex",
                marginRight: "16px",
              }}
            >
              <img src={gopay} style={{ width: "36px" }}></img>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "8px",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Total Saldo
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                >
                  Rp400.000
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* salfo field end */}

        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <img src={PayCard} style={{ width: "87%", margin: 3 }} />
          <img src={PayList} style={{ width: "87%", marginX: 3, marginTop: '20px' }} />
        </Box>

        <Navigation />
      </Box>
    </div>
  );
};
export default Pay;
