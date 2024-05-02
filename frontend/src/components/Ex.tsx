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
      <Tweet
        textTweet={tweet.text}
        from={tweet.from}
        sentiment={tweet.sentiment}
      />
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
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
          }}
        >
          {title}
        </Box>
      </Box>
      {tweetList}
    </Box>
  );
};

export default Ex;
