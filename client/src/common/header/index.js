import {
  useSyncLocalStorage,
  useSyncSessionStorage,
} from "@/lib/hooks/useSync";
import { useTheme } from "@emotion/react";
import { Button, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { debugSyncV, updateSyncV, useSyncV } from "use-sync-v";
import { Timer } from "../timer";
import { useRouter } from "next/router";
import { state } from "@/pages";

export const Header = () => {
  const router = useRouter();
  const theme = useSyncV("theme");
  const showTimer = useSyncV("show.timer");
  const backToSelector = () => {
    updateSyncV("show", state.show);
    updateSyncV("data", state.state);
  };
  return (
    <Paper
      elevation={1}
      sx={{
        padding: "10px",
        textAlign: "center",
        position: "fixed",
        width: "100%",
        top: "0px",
        zIndex: "10",
        backgroundColor: "hsla(255,90%,30%,0%)",
        backdropFilter: "contrast(150%)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.primary,
          userSelect: "none",
        }}
        onClick={backToSelector}
      >
        whereIs ?
      </Typography>
      {showTimer && <Timer />}
    </Paper>
  );
};
