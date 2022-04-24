import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  HomeRounded,
  NotificationsRounded,
  Person,
  CompareArrowsRounded
} from "@mui/icons-material";

const Navigation = () => {
  const [value, setValue] = useState("");
  const location = useLocation();
  const handleTransaksi = () => {
    window.location="/transaksi";
  };
  const handleHome = () => {
    window.location="/";
  };
  const handleNotifikasi = () => {
    window.location="/notifikasi";
  };
  const handleProfile = () => {
    window.location="/profile";
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
