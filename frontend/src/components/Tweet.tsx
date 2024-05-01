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
            <Avatar alt="owner" src={post.path} />
          </Box>
          <Box>
            <Typography>{post.Username}</Typography>
            <Typography>@{post.account}</Typography>
            <Typography sx={{ marginTop: "10px" }}>{post.detail}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tweet;
