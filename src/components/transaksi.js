import React, { useState } from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button, Box } from "@mui/material";

const TransaksiList = (props) => {
  return (
    <div>
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
          {`Transaksi ${props.kategori}`}
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "10px",
            fontWeight: 400,
            color: "#000000",
          }}
        >
          {`Kamu telah melakukan transaksi sebesar Rp${props.nominal} untuk baso aci kang
          asep pada tanggal ${props.tanggal}`}
        </Typography>
      </Box>
    </div>
  );
};
export default TransaksiList;
