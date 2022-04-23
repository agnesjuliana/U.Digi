import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Box } from "@mui/material";
import TopController from "../components/topController";
import BudgetCard from "../components/budgetCard";

const Budgeting = () => {

  useEffect(() => {
    // dataPlay();
    localStorage.setItem('data', JSON.stringify(data));
  }, []);

  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  const [data, setData] = useState([
    {
      id: 1,
      category: "Makanan",
      percentage: 35,
      totalBudget: 500000,
      pengeluaran: 200000,
      sisa: 300000
    },
    {
      id: 2,
      category: "Pengobatan",
      percentage: 50,
      totalBudget: 500000,
      pengeluaran: 250000,
      sisa: 250000
    },
  ])

  // const progressbar1 = document.querySelector(".progress1");
  //   progressbar1.style.width = progress + `%`;
  // };

  // const progressbar2 = document.querySelector(".progress2");

  // const changeProgress2 = (progress) => {
  //   progressbar2.style.width = progress + `%`;
  // };

  // const dataPlay = () => {
  //   setTimeout(() => changeProgress1(35), 100);
  //   setTimeout(() => changeProgress2(50), 100);
  // }


  let cardList = data.map((data, index) => {
    return (
      <BudgetCard
        key={index}
        category={data.category}
        chart={
          <div class="progress-container">
            <div class={"progress" + data.id}></div>
          </div>
        }
        percentage={" " + data.percentage + "%"}
        sisaBudget={data.sisa}
        pengeluaran={data.pengeluaran}
        totalBudget={data.totalBudget}
      />
    );
  });

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
          {/* <BudgetCard
            category="Makanan"
            chart={
              <div class="progress-container">
                <div class="progress"></div>
              </div>
            }
            percentage=" 22%"
            sisaBudget="100000"
            pengeluaran="200000"
            totalBudget="400000"
          /> */}
          {cardList}
        </div>
      </Box>
    </div>
  );
};
export default Budgeting;
