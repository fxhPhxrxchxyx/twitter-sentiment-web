import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.tsx";
import Tweet from "./components/Tweet";
import MoodCard from "./components/MoodCard.tsx";
import Ex from "./components/Ex";
import { Box, Grid } from "@mui/material";
import {getTweet, IGetTweetServiceResult} from "./getTweet.service.ts";

const theme = createTheme({
  palette: {
    primary: {
      light: "#a6d4fa",
      main: "#90caf9",
      dark: "#648dae",
      contrastText: "#fff",
    },
  },
});

export const AppWithMoodCards: React.FC = () => {
  const [tweetUrl, setTweetUrl] = useState<string>("");
  const [clickedProductName, setClickedProductName] = useState<string | null>(
    null
  );
  const [result, setResult] = useState<IGetTweetServiceResult | null>(null);
  const [, setIsLoading] = useState<boolean>();

  const getPost = useCallback(
    (text: string) => {
      setIsLoading(true);
      getTweet(text)
        .then((data) => {
          //setdata here
          setResult(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setIsLoading]
  );

  const handleSearch = () => {
    getPost(tweetUrl);
    console.log("Tweet URL:", tweetUrl);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App onSearch={handleSearch} setTweetUrl={setTweetUrl} />
        {result != null && (
          <>
            {result.result.examples.map((post) => (
              <Tweet key={post.from} post={post} />
            ))}

            <Box
              sx={(theme) => ({
                display: "flex",
                justifyContent: "center",
                marginRight: 25,
                marginLeft: 25,
                [theme.breakpoints.down("md")]: {
                  margin: 0,
                },
              })}
            >
              <Grid container>
                {result.result.sentiment.map((product) => (
                  <MoodCard
                    key={product.brand}
                    product={product}
                    onClick={() => setClickedProductName(product.brand)}
                  />
                ))}
              </Grid>
            </Box>
            {clickedProductName && <Ex clickedName={clickedProductName} />}
          </>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppWithMoodCards />, document.getElementById("root"));
