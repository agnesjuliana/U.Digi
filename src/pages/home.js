import React, {useState} from "react";
import { useHistory } from "react-router";
import {
  Typography,
  Button,
  Box,
  Grid,
  IconButton,
  CardMedia,
} from "@mui/material";
import Navigation from "../components/navigation";
import linkAja from "../assets/linkaja.png";
import gopay from "../assets/gopay.png";
import {
  TimelineRounded,
  AccountBalanceWalletRounded,
  ImportExportRounded,
  SendRounded,
  MiscellaneousServicesRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import DialogNotif from "../components/dialog";

const Home = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false)

  const handleBudgeting = () => {
    history.push("/budgeting");
  };
  const handleSwitch = () => {
    history.push("/uswitch/tukarsaldo");
  };
  const handleSend = () => {
    history.push("/uswitch/transfersaldo");
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
      
      <Box
        sx={{
          width: "480px",
          backgroundColor: "#e5e5e5",
          minHeight: "100vh",
        }}
      >
        <DialogNotif open={open} closeDialog={() => closeDialog()} />
        <Box
          sx={{
            backgroundColor: "#008AEC",
            padding: "40px 0px 24px 36px",
            borderRadius: "0px 0px 24px 24px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "12px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Total Saldo
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "32px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Rp1.000.000
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontFamily: "poppins",
              backgroundColor: "#139DFF",
              borderRadius: "10px",
              boxShadow: "none",
              fontSize: "10px",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            Lihat Semua
          </Button>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "10px",
                maxWidth: "156px",
                borderRadius: "8px",
                display: "flex",
                marginRight: "16px",
              }}
            >
              <img src={linkAja} style={{ width: "36px" }} onClick={() => openDialog()}></img>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "8px",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Total Saldo
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                >
                  Rp600.000
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                padding: "10px",
                maxWidth: "156px",
                borderRadius: "8px",
                display: "flex",
                marginRight: "16px",
              }}
            >
              <img src={gopay} style={{ width: "36px" }}></img>
              <Box sx={{ marginLeft: "8px" }}>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "8px",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Total Saldo
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                >
                  Rp600.000
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            margin: "16px",
            padding: "24px",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "45px",
              }}
              disabled
              style={{ backgroundColor: "#09B44D" }}
            >
              <TimelineRounded sx={{ color: "white" }} />
            </IconButton>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "12px",
                fontWeight: 400,
                color: "#000000",
                marginTop: "8px",
              }}
            >
              U.Tracker
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "45px",
              }}
              disabled
              style={{ backgroundColor: "#FF3131" }}
            >
              <AccountBalanceWalletRounded sx={{ color: "white" }} />
            </IconButton>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "12px",
                fontWeight: 400,
                color: "#000000",
                marginTop: "8px",
              }}
            >
              U.Pay
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "45px",
              }}
              onClick={() => handleSwitch()}
              style={{ backgroundColor: "#0094FF" }}
            >
              <ImportExportRounded sx={{ color: "white" }} />
            </IconButton>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "12px",
                fontWeight: 400,
                color: "#000000",
                marginTop: "8px",
              }}
            >
              U.Switch
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                padding: "10px",
                borderRadius: "10px",
                maxWidth: "45px",
              }}
              onClick={() => handleSend()}
              style={{ backgroundColor: "#FFD600" }}
            >
              <SendRounded sx={{ color: "white" }} />
            </IconButton>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "12px",
                fontWeight: 400,
                color: "#000000",
                marginTop: "8px",
              }}
            >
              Kirim Uang
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(0, 138, 236, 0.15)",
            padding: "28px 16px",
            margin: "16px",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MiscellaneousServicesRounded
            sx={{ color: "#008AEC", fontSize: "20px" }}
          />
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: 600,
              color: "#008AEC",
            }}
          >
            Yuk, atur budget pengeluaranmu!
          </Typography>
          <IconButton onClick={() => handleBudgeting()}>
            <ArrowForwardIosRounded
              sx={{ color: "#008AEC", fontSize: "20px" }}
            />
          </IconButton>
        </Box>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "15px",
            fontWeight: 600,
            color: "#000000",
            marginLeft: "16px",
          }}
        >
          Buletin untuk kamu!
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "12px",
            fontWeight: 400,
            color: "#000000",
            marginLeft: "16px",
            marginTop: "2px",
          }}
        >
          Jadilah pahlawan keuangan bersama U.Digi
        </Typography>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            margin: "16px",
            maxWidth: "342px",
            pb: 2,
          }}
        >
          <CardMedia
            component="img"
            height="178"
            sx={{ width: 342, borderRadius: "16px 16px 0px 0px" }}
            image="https://images.unsplash.com/photo-1605256585681-455837661b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="img"
          />
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "12px",
              fontWeight: 600,
              color: "#000000",
              marginLeft: "16px",
              marginTop: "8px",
            }}
          >
            Pingin Liburan Tapi No Budget?
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "10px",
              fontWeight: 400,
              color: "#000000",
              marginLeft: "16px",
              marginTop: "4px",
            }}
          >
            Yang kaya gini udah pasti impian tiap orang deh...
          </Typography>
        </Box>
        <Navigation />
      </Box>
    </div>
  );
};
export default Home;
