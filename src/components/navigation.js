import React, {useState} from "react";
import { useHistory } from "react-router";
import {
  Typography,
  Button,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { RestoreRounded, Favorite, Archive, HomeRounded, NotificationsRounded, BuildRounded } from '@mui/icons-material';

const Navigation = () => {
  const history = useHistory();
  const [value, setValue] = useState(0)

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
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={4}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeRounded />} onClick={() => handleHome()} />
        <BottomNavigationAction label="Riwayat" icon={<RestoreRounded />} onClick={() => handleRiwayat()} />
        <BottomNavigationAction label="Notifikasi" icon={<NotificationsRounded />} onClick={() => handleNotifikasi()} />
        <BottomNavigationAction label="Setting" icon={<BuildRounded />} onClick={() => handleSetting()} />
      </BottomNavigation>
      {console.log(value)}
    </Paper>
  );
};
export default Navigation;
