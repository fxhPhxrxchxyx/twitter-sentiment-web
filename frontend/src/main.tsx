import React from "react";
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
  const [clickedProductName, setClickedProductName] = React.useState<
    string | null
  >(null);

  const handleCardClick = (productName: string) => {
    setClickedProductName(productName);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
        <Tweet />
        {prodData.map((product) => (
          <MoodCard
            key={product.id}
            productNames={product}
            onClick={() => handleCardClick(product.productNames)}
          />
        ))}
        {clickedProductName && <Ex clickedName={clickedProductName} />}
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppWithMoodCards />, document.getElementById("root"));
