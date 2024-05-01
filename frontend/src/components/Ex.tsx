import React from "react";
import { Box, Typography } from "@mui/material";
import { prodData } from "./content/Name";
import Tweet from "./Tweet";
import { postData } from "./content/Post";

interface ExProps {
  clickedName: string;
}

const Ex: React.FC<ExProps> = ({ clickedName }) => {
  // Filter prodData based on the clicked productNames
  const filteredData = prodData.filter(
    (product) => product.productNames === clickedName
  );

  const title = <Typography>Example tweet of {clickedName}</Typography>;

  const productList = filteredData.map((product) => (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box key={product.id}>
        {/* Content of each tweet */}
        <Box margin={2}>
          {postData.map((post) => (
            <Tweet key={post.id} post={post} />
          ))}
        </Box>
      </Box>
    </Box>
  ));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={(theme) => ({
          marginLeft: 25,
          [theme.breakpoints.down("md")]: {
            margin: 0,
          },
        })}
      >
        {title}
      </Box>
      {productList}
    </Box>
  );
};

export default Ex;
