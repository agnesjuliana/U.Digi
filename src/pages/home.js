import React from "react";
import { useHistory } from "react-router";
import { Typography, Button } from "@mui/material";
import Navigation from "../components/navigation";

const Home = () => {
  const history = useHistory();

  const handleSwitch = () => {
    history.push("/switch");
  };
  return (
    <div>
      <Typography>Halooo ini home</Typography>
      <Navigation />
    </div>
  );
};
export default Home;
