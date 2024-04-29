import "./App.css";
import "@mui/material/styles";

import { Box, Button,TextField,} from "@mui/material";

function App() {
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "center",padding:'20px'}}
      >
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
          />
          <Button variant="contained" sx={{ flex: "none" }}>
            search
          </Button>
        </Box>
      </Box>

    </Box>
  );
}

export default App;
