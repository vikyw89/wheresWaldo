import { Footer } from "@/common/footer";
import { GameScreen } from "@/common/gameScreen";
import { Header } from "@/common/header";
import { StageSelector } from "@/common/stageSelector";
import { Win } from "@/common/win";
import { Box } from "@mui/system";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { Inter } from "next/font/google";
import { updateSyncV, useQueryV, useSyncV } from "use-sync-v";

const inter = Inter({ subsets: ["latin"] });

export const state = {
  show: {
    stageSelector: true,
    snipe: false,
    timer: false,
    notif: false,
    stageEdit: false,
    gameScreen: false,
    win: false,
  },
  state: {
    stages: null,
    selectedStage: null,
    notif: null,
  },
};

updateSyncV("show", state.show);
updateSyncV("data", state.state);
export default function Home() {
  const theme = useSyncV("theme");

  const show = useSyncV("show");

  const win = useSyncV("show.win");

  const { data, loading, error } = useQueryV("stages", async () => {
    return await FirebaseFirestore.readCol("stages");
  });
  console.log('refreshHome')
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        margin: "0 auto",
      }}
    >
      <Header />
      {show.stageSelector && <StageSelector />}
      {show.gameScreen && <GameScreen />}
      {show.win && <Win />}
      <Footer />
    </Box>
  );
}
