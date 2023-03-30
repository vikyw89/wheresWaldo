import { useSyncSessionStorage } from "@/lib/hooks/useSync";
import { initStore } from "@/lib/store/gameData";
import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { readSyncV, updateSyncV } from "use-sync-v";

import {cloneDeep} from "lodash-es"
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ed6c02",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
  },
});

updateSyncV("theme.dark", darkTheme);
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

updateSyncV("theme.light", lightTheme);

initStore();

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useSyncSessionStorage("theme");

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
