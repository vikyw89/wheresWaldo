import { Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSyncV } from "use-sync-v";
import { Timer } from "../timer";

export const Header = () => {
  const router = useRouter();
  const theme = useSyncV("theme");
  const showTimer = useSyncV("show.timer");
  const backToSelector = () => {
    window.location.reload(false);
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
