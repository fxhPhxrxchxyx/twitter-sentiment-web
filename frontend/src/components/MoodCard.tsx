import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Product } from "./content/Name";

type ProductProps = {
  product: Product;
  onClick: () => void;
};

const MoodCard: React.FC<ProductProps> = ({ product, onClick }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Grid item xs={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box
          sx={{
            margin: "20px",
            width: "100%",
            gap: 2,
          }}
        >
          <Box
            key={product.brand}
            sx={{
              borderRadius: "10px",
              minHeight: 100,
              backgroundColor: hovered ? "#ffb74d" : "#edf5ff",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
            onClick={onClick}
          >
            <Typography sx={{ margin: 1 }}>{product.brand}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 2,
              }}
            >
              <Typography variant="h5">{product.sentiment}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default MoodCard;
