import React from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button, Box } from "@mui/material";
import Navigation from "../components/navigation";
import TopController from "../components/topController";
import linkaja from "../assets/linkaja.png";
import gopay from "../assets/gopay.png";

const Notifikasi = () => {
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
        <TopController title="Notifikasi" action={() => handleHome()} />
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "16px",
            display: "flex",
            marginBottom: "8px",
          }}
        >
          <img src={linkaja} style={{ width: "56px", marginRight: "16px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "14px",
                fontWeight: 600,
                color: "#000000",
              }}
            >
              Top Up Link Aja
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 400,
                color: "#000000",
              }}
            >
              Selamat kamu telah berhasil melakukan top up sebesar Rp125.000
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "16px",
            display: "flex",
            marginBottom: "8px",
          }}
        >
          <img src={gopay} style={{ width: "56px", marginRight: "16px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "14px",
                fontWeight: 600,
                color: "#000000",
              }}
            >
              Top Up Gopay
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 400,
                color: "#000000",
              }}
            >
              Selamat kamu telah berhasil melakukan top up sebesar Rp10.000
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "16px",
            display: "flex",
            marginBottom: "8px",
          }}
        >
          <img src={linkaja} style={{ width: "56px", marginRight: "16px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "14px",
                fontWeight: 600,
                color: "#000000",
              }}
            >
              Top Up Link Aja
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 400,
                color: "#000000",
              }}
            >
              Selamat kamu telah berhasil melakukan top up sebesar Rp50.000
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "16px",
            display: "flex",
            marginBottom: "8px",
          }}
        >
          <img src={gopay} style={{ width: "56px", marginRight: "16px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "14px",
                fontWeight: 600,
                color: "#000000",
              }}
            >
              Top Up Link Aja
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 400,
                color: "#000000",
              }}
            >
              Selamat kamu telah berhasil melakukan top up sebesar Rp250.000
            </Typography>
          </Box>
        </Box>
        <Navigation />
      </Box>
    </div>
  );
};
export default Notifikasi;
