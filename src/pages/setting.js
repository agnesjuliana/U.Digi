import React from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button } from "@mui/material";
import Navigation from "../components/navigation";

const Setting = () => {
  const history = useHistory();

  const handleHome = () => {
      history.push("/")
  };
  return (
    <div>
      <Typography>Halooo ini Setting</Typography>
      <Navigation />
    </div>
  );
};
export default Setting;
