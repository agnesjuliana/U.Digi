import React, { useState } from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button, Box, Fab } from "@mui/material";
import Navigation from "../components/navigation";
import TopController from "../components/topController";
import TransaksiList from "../components/transaksi";
import DialogBudget from "../components/dialogBudget";
import BudgetCard from "../components/budgetCard";
import AddIcon from '@mui/icons-material/Add';
import formatRupiah from "../helper/rupiah";


const Budgeting = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([
    {
      id: 1,
      category: "Makanan",
      percentage: 35,
      totalBudget: formatRupiah("500000"),
      pengeluaran: formatRupiah("200000"),
      sisa: formatRupiah("300000")
    },
    {
      id: 2,
      category: "Pengobatan",
      percentage: 50,
      totalBudget: formatRupiah("500000"),
      pengeluaran: formatRupiah("250000"),
      sisa: formatRupiah("250000")
    },
  ]);

  const handleHome = () => {
    window.location="/";
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
      <DialogBudget open={open} closeDialog={() => closeDialog()} data={data} />
      <Box
        sx={{
          width: "480px",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <TopController title="Atur Budget" action={() => handleHome()} />
        <div style={{ padding: "24px 16px 0px 16px" }}>
          {data.map((data, index) => (
            <BudgetCard
              key={index}
              category={data.category}
              chart={
                <div class="progress-container">
                  <div class={"progress" + data.id}></div>
                </div>
              }
              percentage={" " + data.percentage + "%"}
              sisaBudget={data.sisa}
              pengeluaran={data.pengeluaran}
              totalBudget={data.totalBudget}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Fab
          sx={{ marginLeft: "16px" }}
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={() => openDialog()}>
          <AddIcon sx={{ mr: 1 }} />
          Tambah kategori pengeluaran
        </Fab>
        </div>
      </Box>
    </div>
  );
};
export default Budgeting;
