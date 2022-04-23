import React from "react";
import { useHistory } from "react-router";
import { Grid, Typography, Button, Box, Paper } from "@mui/material";
import Navigation from "../components/navigation";
import profileImg from '../assets/profile.jpg'

const Profile = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/")
  };
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
          backgroundColor: "#F4F4F4",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{position:'relative'}}>
            <img src={profileImg} style={{
              borderRadius: '50%', width: '150px', height: '150px', 
              position: 'absolute', top: '70px', left: '20px'
            }} />
          </Box>
          <Box sx={{ width: '100%', height: '20vh', backgroundColor: '#008AEC' }} />

          <Box sx={{ marginTop: '10vh', marginX: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '24px', marginTop: 3, marginBottom: 0}}><b>Candatawa Team</b></p>
              <p style={{ fontSize: '20px', marginTop: 8, marginBottom: 0, color: 'grey' }}>She/her</p>
            </Box>

            <Box component={Paper} boxShadow='0' sx={{width:'100%', paddingY:0.5, borderRadius:'16px', marginTop: 2}}>
              <Box sx={{ marginX: 3 }}>
                <p style={{ marginBottom: '0', fontSize: '16px' }}><b>Usia</b></p>
                <p style={{ marginTop: '0', fontSize: '16px' }}>18 Tahun</p>

                <p style={{ marginBottom: '0', fontSize: '16px' }}><b>Domisili</b></p>
                <p style={{ marginTop: '0', fontSize: '16px' }}>Kota Malang</p>

                <p style={{ marginBottom: '0', fontSize: '16px' }}><b>Nomor Telpon</b></p>
                <p style={{ marginTop: '0', fontSize: '16px' }}>+62829127XXXX</p>

                <p style={{ marginBottom: '0', fontSize: '16px' }}><b>Email</b></p>
                <p style={{ marginTop: '0', fontSize: '16px' }}>hallo@candatawa.com</p>
              </Box>
            </Box>
          </Box>

        </Box>

        <Navigation />
      </Box>
    </div>
  );
};
export default Profile;
