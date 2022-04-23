import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Box } from "@mui/material";
import TopController from "../components/topController";
import BudgetCard from "../components/budgetCard";

const Budgeting = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  const progressbar = document.querySelector(".progress");

  const changeProgress = (progress) => {
    progressbar.style.width = progress + `%`;
  };

  /* change progress after 1 second (only for showcase) */
  // setTimeout(() => changeProgress(22), 1000);
  // setTimeout(() => changeProgress(45), 2000);
  // setTimeout(() => changeProgress(85), 4600);
  // setTimeout(() => changeProgress(98), 5266);
  // setTimeout(() => changeProgress(100), 8000);

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    setTimeout(() => changeProgress(22), 100);
  }, []);

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
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <TopController
          title="Atur Budget"
          action={() => handleHome()}
        />
        <div style={{ padding: "24px 16px 0px 16px" }}>
          <BudgetCard
            category="Makanan"
            chart={
              <div class="progress-container">
                <div class="progress"></div>
              </div>
            }
            percentage=" 22%"
          />
        </div>
      </Box>
    </div>
  );
};
export default Budgeting;
