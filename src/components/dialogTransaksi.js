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
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import format from "date-fns/format";

const DialogTransaksi = (props) => {
  const [temp, setTemp] = useState({
    nominal: 0,
    kategori: "",
    tanggal: "",
  });

  const Add = () => {
      let data = props.data
      data.push(temp)
      props.closeDialog()
      console.log(data);
  }
  const dateFormat = (date) => {
    // var today = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    
    return mm + '/' + dd + '/' + yyyy;
  }

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
            Tambah Transaksi
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
            Nominal
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: "100%" }}
            value={temp.nominal}
            type="number"
            onChange={(e) => setTemp({...temp, nominal: e.target.value }, console.log(e.target.value))}
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
            Tanggal
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={temp.tanggal}
              onChange={(newValue) => {
                console.log(newValue.getTime())
                setTemp({...temp, tanggal: dateFormat(newValue) });
              }}
              renderInput={(params) => (
                <TextField {...params} size="small" fullWidth />
              )}
            />
          </LocalizationProvider>
          {/* <TextField
            variant="outlined"
            size="small"
            sx={{ width: "100%", fontSize: "12px" }}
            value={temp.tanggal}

          ></TextField> */}
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
          <Select sx={{ width: "100%" }} size="small" onChange={(e) => setTemp({...temp, kategori: e.target.value})}>
            <MenuItem value="makanan">Makanan</MenuItem>
            <MenuItem value="laundry">Laundry</MenuItem>
            <MenuItem value="transportasi">Trasnportasi</MenuItem>
            <MenuItem value="listrik">Listrik</MenuItem>
          </Select>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              boxShadow: "none",
              borderRadius: "8px",
              backgroundColor: "#008AEC",
              width: "100%",
              marginTop: "8px",
            }}
            onClick={() => Add()}
          >
            Simpan
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default DialogTransaksi;
