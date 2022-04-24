import React from "react";
import { Box, MenuItem, Select, Button, Paper, TextField } from "@mui/material";
import TopController from "../components/topController";
import DialogTransferSaldo from "../components/DialogTransferSaldo";
import formatRupiah from "../helper/rupiah";

export default function TransferSaldo() {
  const handleHome = () => {
    window.location = '/'
  };

  const [open, setOpen] = React.useState(false)

  const openDialog = () => { setOpen(true) }
  const closeDialog = () => { 
    setOpen(false) 
    window.location =  '/'
  }

  const [data, setData] = React.useState({
    from: "Shopee Pay",
    to: "LinkAja",
    nominal: 0,
    no: '+62'
  })
  const [view, setView] = React.useState({
    form: 'block',
    summary: 'none'
  })

  const walletList = ["LinkAja", "Go Pay", "Shopee Pay", "OVO"]

  const nextPage = () => {
    const newView = {
      form: 'none',
      summary: 'block'
    }

    setView(newView)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "480px",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <DialogTransferSaldo open={open} closeDialog={() => closeDialog()} data={data}/>

        <TopController
          title="Transfer Saldo"
          action={() => handleHome()}
        />

        {/* First form */}
        <div style={{ padding: "24px 16px 0px 16px", display: view.form }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '80vh' }}>
            <Box sx={{ width: '100%' }}>

              <p style={{ marginBottom: 2 }}><b>E-Wallet Asal</b></p>
              <Select
                displayEmpty
                value={data.from}
                onChange={(e) => setData({ ...data, ['from']: e.target.value })}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: "100%" }}
              >
                {
                  walletList.map((item) => {
                    return (
                      <MenuItem key={item} value={item} >
                        {item}
                      </MenuItem>
                    )
                  }
                  )
                }
              </Select>

              <p style={{ marginBottom: 2 }}><b>E-Wallet Tujuan</b></p>
              <Select
                displayEmpty
                value={data.to}
                onChange={(e) => setData({ ...data, ['to']: e.target.value })}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: "100%" }}
              >
                {
                  walletList.map((item) => {
                    return (
                      <MenuItem key={item} value={item} >
                        {item}
                      </MenuItem>
                    )
                  }
                  )
                }
              </Select>

              <p style={{ marginBottom: 2 }}><b>Nomor Tujuan</b></p>
              <TextField id="filled-basic" label="+62" variant="filled"
                type='text'
                value={data.no}
                sx={{ width: '100%' }}
                onChange={(e) => setData({ ...data, ['no']: e.target.value })}
              />

              <p style={{ marginBottom: 2 }}><b>Nominal</b></p>
              <TextField id="filled-basic" label="Rp" variant="filled"
                type='text'
                value={data.nominal}
                sx={{ width: '100%' }}
                onChange={(e) => setData({ ...data, ['nominal']: formatRupiah(e.target.value) })}
              />

            </Box>
            <Box sx={{ width: '100%' }}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ backgroundColor: '#008AEC', fontFamily: 'Poppins', textTransform: 'capitalize', boxShadow: 0, borderRadius: '8px' }}
                onClick={() => nextPage()}
              >
                Lanjut
              </Button>
            </Box>
          </Box>
        </div>

        {/* summary */}
        <div style={{ padding: "24px 16px 0px 16px", display: view.summary }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '80vh' }}>
            <Box component={Paper} boxShadow='0' sx={{
              width: "100%", borderRadius: '16px'
            }}>
              <Box sx={{ marginLeft: 3, marginTop: 1, marginBottom: 1, display: 'flex', flexDirection: 'column' }}>
                <p><b>Pastikan semua data benar</b></p>
                <p style={{ marginTop: '0', fontSize: '12px' }}>
                  Sebelum melakukan transaksi pastikan semua data benar dan lanjutkan transfer e-money.
                </p>

                <p style={{ marginBottom: '0', fontSize: '12px' }}><b>E-Wallet Asal</b></p>
                <p style={{ marginTop: '0', fontSize: '14px' }}>{data.from} </p>

                <p style={{ marginBottom: '0', fontSize: '12px' }}><b>E-Wallet Tujuan</b></p>
                <p style={{ marginTop: '0', fontSize: '14px' }}>{data.to} </p>

                <p style={{ marginBottom: '0', fontSize: '12px' }}><b>Nomor Tujuan</b></p>
                <p style={{ marginTop: '0', fontSize: '14px' }}>{data.no} </p>

                <p style={{ marginBottom: '0', fontSize: '12px' }}><b>Nama Penerima</b></p>
                <p style={{ marginTop: '0', fontSize: '14px' }}>Gata</p>

                <p style={{ marginBottom: '0', fontSize: '12px' }}><b>Nominal yang akan ditransfer</b></p>
                <p style={{ marginTop: '0', fontSize: '14px' }}>Rp{data.nominal} </p>

              </Box>
            </Box>

            <Box sx={{ width: '100%' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ backgroundColor: '#008AEC', fontFamily: 'Poppins', textTransform: 'capitalize', boxShadow: 0, borderRadius: '8px' }}
                onClick={() => openDialog()}
              >
                Kirim
              </Button>
            </Box>
          </Box>
        </div>


      </Box>
    </div>
  );
}

