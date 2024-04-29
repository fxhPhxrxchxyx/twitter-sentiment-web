import { Box, Typography } from "@mui/material";
import { Key } from "react";

const MoodCard = ({ productNames }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          margin: "20px",
          width: 1000,
          marginLeft: "20px",
          marginRight: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(48%, 1fr))",
          gap: 2,
        }}
      >
        {productNames.map(
          (
            productName: string | number | boolean | null | undefined,
            index: Key | null | undefined
          ) => (
            <Box
              key={index}
              sx={{
                borderRadius: "10px",
                minHeight: 100,
                backgroundColor: "#edf5ff",
                display: "flex",
                flexDirection: "column", // Setting column layout for inner content
                padding: 1,
              }}
            >
              <Typography sx={{ margin: 1 }}>{productName}</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "auto",
                }}
              >
                <Typography variant="h5">mood %</Typography>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default MoodCard;
