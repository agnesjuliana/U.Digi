import React, { useState } from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button, Box } from "@mui/material";
import Navigation from "../components/navigation";
import TopController from "../components/topController";

const Riwayat = () => {
  const history = useHistory();
  const [data, setData] = useState([
    {
      kategori: "makanan",
      nominal: 20000,
    },
  ]);

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
        <TopController title="Riwayat" action={() => handleHome()} />
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "16px",
            marginBottom: "8px",
            borderLeft: "4px solid #FFB800",
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000",
              marginBottom: "8px",
            }}
          >
            Transaksi Makanan
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "10px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Kamu telah melakukan transaksi sebesar Rp250.000 untuk baso aci kang
            asep pada tanggal 22 Februari 2022
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "16px",
            marginBottom: "8px",
            borderLeft: "4px solid #EF5DA8",
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000",
              marginBottom: "8px",
            }}
          >
            Transaksi Pengobatan
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "10px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Kamu telah melakukan transaksi sebesar Rp250.000 untuk baso aci kang
            asep pada tanggal 22 Februari 2022
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "16px",
            marginBottom: "8px",
            borderLeft: "4px solid #5D5FEF",
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000",
              marginBottom: "8px",
            }}
          >
            Transaksi Listrik
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "10px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Kamu telah melakukan transaksi sebesar Rp250.000 untuk baso aci kang
            asep pada tanggal 22 Februari 2022
          </Typography>
        </Box>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#008AEC",
              borderRadius: "10px",
              marginTop: "8px",
              marginRight: "8px",
              maxWidth: "100px",
              boxShadow: "none"
            }}
          >
            Tambah
          </Button>
        </div>
        <Navigation />
      </Box>
    </div>
  );
};
export default Riwayat;
