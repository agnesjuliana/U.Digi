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
} from "@mui/icons-material";

const Navigation = () => {
  const history = useHistory();
  const [value, setValue] = useState("");
  const location = useLocation();
  const handleRiwayat = () => {
    history.push("/riwayat");
  };
  const handleHome = () => {
    history.push("/");
  };
  const handleNotifikasi = () => {
    history.push("/notifikasi");
  };
  const handleSetting = () => {
    history.push("/setting");
  };
  const cek = () => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/riwayat") {
      setValue(1);
    } else if (location.pathname === "/notifikasi") {
      setValue(2);
    } else if (location.pathname === "/setting") {
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
          label="Riwayat"
          icon={<RestoreRounded />}
          onClick={() => handleRiwayat()}
        />
        <BottomNavigationAction
          label="Notifikasi"
          icon={<NotificationsRounded />}
          onClick={() => handleNotifikasi()}
        />
        <BottomNavigationAction
          label="Setting"
          icon={<BuildRounded />}
          onClick={() => handleSetting()}
        />
      </BottomNavigation>
    </Paper>
  );
};
export default Navigation;
