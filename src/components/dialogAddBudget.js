import React from "react";
import {
  Dialog,
  Typography,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';



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
            required
            InputProps={{
              readOnly: false,
            }}
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
            variant="outlined"
            size="small"
            sx={{ width: "100%", fontSize: "12px" }}
            required
            InputProps={{
              readOnly: false,
            }}
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
export default DialogAddBudget;
