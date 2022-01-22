import { Alert, AlertTitle } from "@mui/material";
import React from "react";

function Error({ error }) {
  return (
    <div className="Error w-auto">
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error} — <strong>Please refresh the page</strong>
      </Alert>
    </div>
  );
}

export default Error;
