import React from "react";
import { Box, Button, TextField } from "@mui/material";

type AppProps = {
  onSearch: () => void; // Function to handle search action
  setTweetUrl: React.Dispatch<React.SetStateAction<string>>; // Function to update tweet URL state
};

const App: React.FC<AppProps> = ({ onSearch, setTweetUrl }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTweetUrl(event.target.value);
  };

  const handleButtonClick = () => {
    onSearch();
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <TextField
            fullWidth
            label="Paste your tweet url here"
            color="primary"
            id="tweetUrl"
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            sx={{ flex: "none" }}
            onClick={handleButtonClick}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
