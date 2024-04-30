import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Product } from "./content/Name";

type ProductProps = {
  productNames: Product;
  onClick: () => void;
};

const MoodCard: React.FC<ProductProps> = ({ productNames, onClick }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
    onClick();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          margin: "20px",
          width: 1000,
          marginLeft: "20px",
          marginRight: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
        }}
      >
        <Box
          key={productNames.id}
          sx={{
            borderRadius: "10px",
            minHeight: 100,
            backgroundColor: "#edf5ff",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s",
            transform: clicked ? "scale(1.05)" : "scale(1)",
          }}
          onClick={handleClick}
        >
          <Typography sx={{ margin: 1 }}>
            {productNames.productNames}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: 2,
            }}
          >
            <Typography variant="h5">
              {productNames.mood} {productNames.percent} %
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MoodCard;
