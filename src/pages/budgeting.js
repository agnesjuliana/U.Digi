import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Box, Fab } from "@mui/material";
import TopController from "../components/topController";
import BudgetCard from "../components/budgetCard";
import DialogAddBudget from "../components/dialogAddBudget";
import AddIcon from '@mui/icons-material/Add';

const Budgeting = () => {

  const history = useHistory();
  const [open, setOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, []);

  const handleHome = () => {
    history.push("/");
  };

  const openDialog = () => {
    setOpen(true)
  }
  const closeDialog = () => {
    setOpen(false)
  }

  const [data] = useState([
    {
      id: 1,
      category: "Makanan",
      percentage: 35,
      totalBudget: 500000,
      pengeluaran: 200000,
      sisa: 300000
    },
    {
      id: 2,
      category: "Pengobatan",
      percentage: 50,
      totalBudget: 500000,
      pengeluaran: 250000,
      sisa: 250000
    },
  ])

  let cardList = data.map((data, index) => {
    return (
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
    );
  });

  const addBudget = () => {
    setOpen(false)
    data.push({
      id: 3,
      category: "Listrik",
      percentage: 0,
      totalBudget: 500000,
      pengeluaran: 0,
      sisa: 500000
    })
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
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
        <div style={{ padding: "24px 16px 0px 16px" }}>
          {cardList}
        </div>
        <Fab
          sx={{ marginLeft: "16px"}}
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={() => openDialog()}>
          <AddIcon sx={{ mr: 1 }} />
          Tambah kategori pengeluaran
        </Fab>
      </Box>
      <DialogAddBudget open={open} closeDialog={() => closeDialog()} addBudget={() => addBudget()} />
    </div>

  );
};
export default Budgeting;
