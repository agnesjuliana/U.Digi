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
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontSize: '24px', textAlign: 'center', margin: 0 }}><b>Transaksi Berhasil</b></p>
            <CheckCircleIcon sx={{ fontSize: '150px', color: '#008AEC' }} />
            <p style={{ fontSize: '16px', textAlign: 'center', margin: 0 }}>Selamat kamu telah berhasil melakukan pertukaran saldo!</p>

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
