import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

type TweetProps = {
  textTweet: string;
  from: string;
  sentiment: string;
};

const Tweet: React.FC<TweetProps> = ({ textTweet, from, sentiment }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: 1000,
          borderRadius: "10px",
          backgroundColor: "#deebff",
          minHeight: 100,
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Box margin={2} sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Box>
            <Avatar
              alt="owner"
              src="https://www.allkpop.com/upload/2023/04/content/180144/web_data/allkpop_1681796882_20230408-jaehyun.jpeg"
            />
          </Box>
          <Box>
            <Typography>{from}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{textTweet}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 2,
              }}
            >
              <Typography variant="h5">{sentiment}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tweet;
