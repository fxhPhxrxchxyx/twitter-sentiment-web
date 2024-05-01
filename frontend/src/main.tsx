import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.tsx";
import Tweet from "./components/Tweet";
import MoodCard from "./components/MoodCard.tsx";
import Ex from "./components/Ex";
import { Product, prodData } from "./components/content/Name.ts";
import { Post, postData } from "./components/content/Post.ts";
import { Box, Grid } from "@mui/material";
import { getTweet } from "./getTweet.service.ts";

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
  const [isLoading, setIsLoading] = useState<boolean>();
  const [productData, setProductData] = useState<Product[]>([]);
  const [brandata, setBrandData] = useState<Post[]>([]);

  const getPost = useCallback(
    (text: string) => {
      setIsLoading(true);
      getTweet(text)
        .then(() => {
          //setdata here
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
        {postData.map((post) => (
          <Tweet key={post.id} post={post} />
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
            {prodData.map((product) => (
              <MoodCard
                key={product.id}
                productNames={product}
                onClick={() => setClickedProductName(product.productNames)}
              />
            ))}
          </Grid>
        </Box>
        {clickedProductName && <Ex clickedName={clickedProductName} />}
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppWithMoodCards />, document.getElementById("root"));
