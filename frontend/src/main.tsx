import React from "react";
import ReactDOM from "react-dom/client";
import "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.tsx";
import Tweet from "./components/Tweet"
import MoodCard from "./components/MoodCard.tsx";

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

 const productNames = [
   "Google Chrome",
   "Google Chrome",
   "Excel",
   
 ];



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Tweet />
      <MoodCard productNames={productNames} />
      {/* <Ex productNames={productNames}/> */}
    </ThemeProvider>
  </React.StrictMode>
);
