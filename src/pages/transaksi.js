import React, { useState } from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button, Box } from "@mui/material";
import Navigation from "../components/navigation";
import TopController from "../components/topController";
import TransaksiList from "../components/transaksi";
import DialogTransaksi from "../components/dialogTransaksi";

const Transaksi = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([
    {
      kategori: "makanan",
      nominal: 20000,
      tanggal: "04/23/2022",
    },
    {
      kategori: "listrik",
      nominal: 20000,
      tanggal: "04/21/2022",
    },
    {
      kategori: "tagihan",
      nominal: 20000,
      tanggal: "04/20/2022",
    },
  ]);

  const handleHome = () => {
    history.push("/");
  };
  const openDialog = () => {
    setOpen(true)
  }
  const closeDialog = () => {
    setOpen(false)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DialogTransaksi open={open} closeDialog={() => closeDialog()} data={data} />
      <Box
        sx={{
          width: "480px",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <TopController title="Transaksi" action={() => handleHome()} />
        {data.map((item, index) => (
          <TransaksiList
            kategori={item.kategori}
            nominal={item.nominal}
            tanggal={item.tanggal}
          />
        ))}
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
              boxShadow: "none",
              textTransform: "none",
            }}
            onClick={() => openDialog()}
          >
            Tambah
          </Button>
        </div>
        <Navigation />
      </Box>
    </div>
  );
};
export default Transaksi;
