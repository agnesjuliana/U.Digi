import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from "@mui/material";

export default function topController({title, action}) {
 
  return (
    <div>
      <div className="topController">
        <ArrowBackIcon
          style={{ color: "white", marginTop: "54px", marginLeft: "32px" }}
          onClick={action}
        />
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "24px",
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            marginTop: "-33px",
          }}
        >
          {title}
        </Typography>
      </div>
    </div>
  )
}
