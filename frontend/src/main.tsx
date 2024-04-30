import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.tsx";
import Tweet from "./components/Tweet";
import MoodCard from "./components/MoodCard.tsx";
import Ex from "./components/Ex";
import { prodData } from "./components/content/Name.ts";

const theme = createTheme({
  palette: {
    primary: {
      light: "#a6d4fa",
      main: "#90caf9",
      dark: "#648dae",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffc570",
      main: "#ffb74d",
      dark: "#b28035",
      contrastText: "#000",
    },
  },
});

export const AppWithMoodCards: React.FC = () => {
  const [tweetUrl, setTweetUrl] = useState<string>("");
  const [clickedProductName, setClickedProductName] = useState<string | null>(
    null
  );

  const handleSearch = () => {
    console.log("Tweet URL:", tweetUrl);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App onSearch={handleSearch} setTweetUrl={setTweetUrl} />
        <Tweet />
        {prodData.map((product) => (
          <MoodCard
            key={product.id}
            productNames={product}
            onClick={() => setClickedProductName(product.productNames)}
          />
        ))}
        {clickedProductName && <Ex clickedName={clickedProductName} />}
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppWithMoodCards />, document.getElementById("root"));
