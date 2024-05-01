import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Post } from "./content/Post";

type TweetProps = {
  post: Post;
};

const Tweet: React.FC<TweetProps> = ({ post }) => {
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
            <Typography>{post.from}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{post.text}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tweet;
