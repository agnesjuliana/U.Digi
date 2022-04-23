import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import {
  Typography,
  Button,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  RestoreRounded,
  Favorite,
  Archive,
  HomeRounded,
  NotificationsRounded,
  BuildRounded,
  Person,
  CompareArrowsRounded
} from "@mui/icons-material";

const Navigation = () => {
  const history = useHistory();
  const [value, setValue] = useState("");
  const location = useLocation();
  const handleTransaksi = () => {
    history.push("/transaksi");
  };
  const handleHome = () => {
    history.push("/");
  };
  const handleNotifikasi = () => {
    history.push("/notifikasi");
  };
  const handleProfile = () => {
    history.push("/profile");
  };
  const cek = () => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/transaksi") {
      setValue(1);
    } else if (location.pathname === "/notifikasi") {
      setValue(2);
    } else if (location.pathname === "/profile") {
      setValue(3);
    }
  };
  useEffect(() => {
    cek();
  }, []);
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        // minWidth: "480px",
      }}
      elevation={4}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeRounded />}
          onClick={() => handleHome()}
        />
        <BottomNavigationAction
          label="Transaksi"
          icon={<CompareArrowsRounded />}
          onClick={() => handleTransaksi()}
        />
        <BottomNavigationAction
          label="Notifikasi"
          icon={<NotificationsRounded />}
          onClick={() => handleNotifikasi()}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<Person />}
          onClick={() => handleProfile()}
        />
      </BottomNavigation>
    </Paper>
  );
};
export default Navigation;
