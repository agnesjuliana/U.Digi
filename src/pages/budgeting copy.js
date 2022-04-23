import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Box, Fab, Dialog, Typography, DialogContent, TextField, Button, } from "@mui/material";
import TopController from "../components/topController";
import BudgetCard from "../components/budgetCard";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


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

  const [budget, setBudget] = useState([
    {
      id: 3,
      category: "Listrik",
      percentage: 0,
      totalBudget: 0,
      pengeluaran: 0,
      sisa: 0
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

  const DialogAddBudget = (props) => {
    return (
      <div>
        <Dialog
          open={props.open}
          onClose={props.closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ style: { borderRadius: "16px" } }}
          fullWidth
        >
          <DialogContent sx={{ padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                Tambah kategori pengeluaran
              </Typography>
              <CloseIcon onClick={props.closeDialog} />
            </div>

            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 600,
                color: "#000000",
                marginTop: "24px",
              }}
            >
              Kategori
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              sx={{ width: "100%", fontSize: "12px" }}
              value={budget.category}
              onChange={(e) => setBudget({ ...budget, ['category']: e.target.value })}
            ></TextField>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "10px",
                fontWeight: 600,
                color: "#000000",
                marginTop: "8px",
              }}
            >
              Batas Keluar
            </Typography>
            <TextField
              id="filled-basic"
              type='text'
              variant="outlined"
              size="small"
              sx={{ width: "100%", fontSize: "12px" }}
              value={budget.totalBudget}
              onChange={(e) => setBudget({ ...budget, ['totalBudget']: e.target.value, ['percentage']: 0 })}

            ></TextField>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                boxShadow: "none",
                borderRadius: "8px",
                backgroundColor: "#008AEC",
                width: "100%",
                marginTop: "32px"
              }}
              onClick={props.addBudget}
            >
              Simpan
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  const addBudget = () => {
    setOpen(false)
    data.push(budget)
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
          sx={{ marginLeft: "16px" }}
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
