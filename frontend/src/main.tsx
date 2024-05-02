import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.tsx";
import Tweet from "./components/Tweet";
import MoodCard from "./components/MoodCard.tsx";
import Ex from "./components/Ex";
import { Box, Grid, Typography } from "@mui/material";
import { getTweet, IGetTweetServiceResult } from "./getTweet.service.ts";
import { DotLoader } from "react-spinners";

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
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isSearchClick, setIsSearchClick] = useState<boolean>(false);

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
    setIsSearchClick(true);
    getPost(tweetUrl);
    console.log("Tweet URL:", tweetUrl);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App onSearch={handleSearch} setTweetUrl={setTweetUrl} />
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <DotLoader color="#47d8ff" />
          </Box>
        )}
        {result != null && (
          <>
            {result.result.map((brand) =>
              brand.examples.map((tweet) => (
                <Tweet
                  key={tweet.from}
                  textTweet={tweet.text}
                  from={tweet.from}
                />
              ))
            )}

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
                {result.result.map((brand) => (
                  <MoodCard
                    key={brand.brand}
                    sentiment={brand.sentiment}
                    brand={brand.brand}
                    onClick={() => setClickedProductName(brand.brand)}
                  />
                ))}
              </Grid>
            </Box>
            {clickedProductName && (
              <Ex
                brand={clickedProductName}
                examples={
                  result.result.find(
                    (item) => item.brand === clickedProductName
                  )?.examples
                }
              />
            )}
          </>
        )}
        {(result == null || result.result.length == 0) &&
          isSearchClick &&
          !isLoading && (
            <Typography textAlign="center" marginTop={20}>
              Data not found😔
            </Typography>
          )}
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppWithMoodCards />, document.getElementById("root"));
