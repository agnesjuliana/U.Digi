import React, { useState } from "react";
import {
  Dialog,
  Typography,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import {} from "@mui/icons-material";

const DialogNotif = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "16px",
              fontWeight: 600,
              color: "#000000",
            }}
          >
            Transaksi Terdeteksi
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "12px",
              fontWeight: 400,
              color: "#000000",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            Transaksi kamu telah terdeteksi. Silahkan lengkapi rincian transaksi
            yang baru saja kamu lakukan.
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "10px",
              fontWeight: 600,
              color: "#000000",
              marginTop: "8px",
            }}
          >
            Uang Keluar
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: "100%", backgroundColor: "#e5e5e5" }}
            disabled
            defaultValue="Rp50.000"
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
            Rincian
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: "100%", fontSize: "12px" }}
            defaultValue="Makan siang"
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
            Pilih Kategori
          </Typography>
          <Select
            sx={{ width: "100%" }}
            size="small"
          >
            <MenuItem value="makanan">Makanan</MenuItem>
            <MenuItem value="laundry">Laundry</MenuItem>
            <MenuItem value="transportasi">Trasnportasi</MenuItem>
          </Select>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              boxShadow: "none",
              borderRadius: "8px",
              backgroundColor: "#008AEC",
              width: "100%",
              marginTop: "8px"
            }}
            onClick={props.closeDialog}
          >
            Simpan
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default DialogNotif;
