import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { prodData } from "./content/Name";

interface ExProps {
  clickedName: string;
}

const Ex: React.FC<ExProps> = ({ clickedName }) => {
  // Filter prodData based on the clicked productNames
  const filteredData = prodData.filter(
    (product) => product.productNames === clickedName
  );

  const productList = filteredData.map((product) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        padding: "20px",
        flexDirection: "column",
      }}
      key={product.id}
    >
      <Typography> Example tweet of {product.productNames} </Typography>
      <Box
        sx={{
          width: 1000,
          borderRadius: "10px",
          backgroundColor: "#deebff",
          minHeight: 100,
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "20px",
        }}
      >
        {/* Content of each tweet */}
        <Box margin={2}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Box>
              <Avatar
                alt="owner"
                src="https://i.pinimg.com/736x/18/7f/8b/187f8b55285f5dbaf2fb5b7f30d6c3bb.jpg"
              />
            </Box>
            <Box>
              <Typography>Username</Typography>
              <Typography>@acc</Typography>
            </Box>
          </Box>
          <Typography sx={{ marginTop: "10px", marginLeft: "20px" }}>
            Fexcel is Google Chrome extension that will help you to be
            professional in Excel !
          </Typography>
        </Box>
      </Box>
    </Box>
  ));

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {productList}
      </Box>
    </Box>
  );
};

export default Ex;
