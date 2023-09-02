import { Box } from "@mui/material";
import React from "react";
import CardComponent from "./Card";

const CardHolder = () => {
  const numbersArray = ["1,2,3,4,5,6,7,8,9,10"][0].split(",").map(Number);
  return (
    <Box
      sx={{
        mt:'10px',
        padding: "10px",
        width: "100%",
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
      }}
    >
      {numbersArray.map((v) => (
        <CardComponent />
      ))}
    </Box>
  );
};

export default CardHolder;
