import React from "react";
import { Box, Typography } from "@mui/material";
import Tweet from "./Tweet";
import { TweetSentiment } from "./content/Name";

interface ExProps {
  examples: TweetSentiment[] | undefined;
  brand: string;
}

const Ex: React.FC<ExProps> = ({ examples, brand }) => {
  const title = <Typography>Example tweet of {brand}</Typography>;

  const tweetList = examples?.map((tweet) => (
    <Box key={tweet.from} margin={2}>
      <Tweet textTweet={tweet.text} from={tweet.from} />
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
