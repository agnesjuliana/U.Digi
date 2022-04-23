import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Box
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DialogTukarSaldo = (props) => {
  const [open, setOpen] = React.useState(false);

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
          <Box sx={{ display: 'flex', flexDirection: 'column',  justifyContent: 'space-between' }}>
            <p style={{ fontSize: '24px', textAlign: 'center', margin: 0 }}><b>Transaksi Berhasil</b></p>

            <p style={{ marginBottom: '0', fontSize: '12px' }}><b>E-Wallet Asal</b></p>
            <p style={{ marginTop: '0', fontSize: '14px' }}>{props.data.from} </p>

            <p style={{ marginBottom: '0', fontSize: '12px' }}><b>E-Wallet Tujuan</b></p>
            <p style={{ marginTop: '0', fontSize: '14px' }}>{props.data.to} </p>

            <p style={{ marginBottom: '0', fontSize: '12px' }}><b>Nomor Tujuan</b></p>
            <p style={{ marginTop: '0', fontSize: '14px' }}>{props.data.no} </p>

            <p style={{ marginBottom: '0', fontSize: '12px' }}><b>Nama Penerima</b></p>
            <p style={{ marginTop: '0', fontSize: '14px' }}>Gata</p>

            <p style={{ marginBottom: '0', fontSize: '12px' }}><b>Nominal yang akan ditransfer</b></p>
            <p style={{ marginTop: '0', fontSize: '14px' }}>Rp {props.data.nominal} </p>

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#008AEC', fontFamily: 'Poppins', textTransform: 'capitalize', boxShadow: 0, borderRadius: '8px', mt: 3 }}
              onClick={props.closeDialog}
            >
              Tutup
            </Button>
          </Box>


        </DialogContent>
      </Dialog>
    </div>
  );
};
export default DialogTukarSaldo;
