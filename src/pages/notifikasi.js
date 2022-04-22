import React from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button } from "@mui/material";
import Navigation from "../components/navigation";

const Notifikasi = () => {
  const history = useHistory();

  const handleHome = () => {
      history.push("/")
  };
  return (
    <div>
      <Typography>Halooo ini Notifikasi</Typography>
      <Navigation />
    </div>
  );
};
export default Notifikasi;
