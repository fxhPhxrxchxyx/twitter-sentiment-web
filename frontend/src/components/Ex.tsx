import React from "react";
import { Box, Typography } from "@mui/material";
import Tweet from "./Tweet";
import { Post } from "./content/Post";

interface ExProps {
  clickedName: string;
}

const Ex: React.FC<ExProps> = ({ clickedName }) => {
  const title = <Typography>Example tweet of {clickedName}</Typography>;

  const filteredTweets = Post.filter(
    (post) => post.brand.toLowerCase() === clickedName.toLowerCase()
  );

  const tweetList = filteredTweets.map((tweet) => (
    <Box key={tweet.from} margin={2}>
      <Tweet post={tweet} />
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
      {tweetList}
    </Box>
  );
};

export default Ex;
