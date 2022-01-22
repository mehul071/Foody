import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./loading.css";

function Loading() {
  return (
    <div className="Loading text-center">
      <Box sx={{}}>
        <CircularProgress className="text-4xl" />
      </Box>
    </div>
  );
}

export default Loading;
