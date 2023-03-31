import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { updateSyncV, useSyncV } from "use-sync-v";

export const Timer = () => {
  const timer = useSyncV("state.timer");

  useEffect(() => {
    const timerInterval = setInterval(() => {
      updateSyncV("state.timer", (p) => {
        if (!p) {
          p = 0;
        }
        return p + 1;
      });
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        color: "white",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <span>countdown</span>
      <span style={{ paddingLeft: "5px", color: "red", fontSize: "1.2rem" }}>
        {timer}
      </span>
    </Box>
  );
};
