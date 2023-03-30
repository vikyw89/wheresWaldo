import { Footer } from "@/common/footer";
import { Header } from "@/common/header";
import { StageSelector } from "@/common/stageSelector";
import { Box } from "@mui/system";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { updateSyncV, useQueryV, useSyncV } from "use-sync-v";

const inter = Inter({ subsets: ["latin"] });

const store = {
  ui: {
    phase: {
      showTarget: false,
      showTimer: false,
      showNotif: false,
      stage: 0,
      stageSelector:true,
      stageEdit: false
    },
  },
  stages: null,
  player : {
  }
};

updateSyncV("ui", store.ui)

export default function Home() {
  const theme = useSyncV("theme")
  
  const { data, loading, error } = useQueryV("stages", async () => {
    return await FirebaseFirestore.readCol("stages");
  });

  const [stage, setStage] = useState({})

  useEffect(()=>{
    if (!data) return
    setStage(data[0])
  },[data])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        justifyContent:'center',
        minHeight: "100%",
        margin:'0 auto'
      }}
    >
      <Header />
      <StageSelector />
      {/* <GameScreen stage={}/> */}
      <Footer />
    </Box>
  );
}

  // useEffect(() => {
  //   const scrollHandler = (e) => {
  //     updateSyncV("ui.showTarget", false);
  //   };
  //   window.addEventListener("scroll", scrollHandler);
  // }, [data]);

  // const clickHandler = (e) => {
  //   if (ui?.showTarget) {
  //     updateSyncV("ui.showTarget", (p) => {
  //       return !p;
  //     });
  //     return;
  //   }
  //   const [x, y] = [e.pageX, e.pageY];
  //   const { height, width } = e.target;
  //   const xRelativeCoordinate = Math.floor((x * 100) / width);
  //   const yRelativeCoordinate = Math.floor((y * 100) / height);
  //   updateSyncV("ui.clickCoordinate.screen", {
  //     x: x - window.scrollX,
  //     y: y - window.scrollY,
  //   });
  //   updateSyncV("ui.clickCoordinate.image", {
  //     x: xRelativeCoordinate,
  //     y: yRelativeCoordinate,
  //   });
  //   updateSyncV("ui.showTarget", true);
  // };

  // const validateCatchHandler = (e) => {
  //   updateSyncV("ui.showTarget", false);
  //   const doc_id = e.target.dataset["doc_id"];

  //   // get document data for that doc_id
  //   const playerGuess = wanted.data.filter((el) => {
  //     return el.doc_id === doc_id;
  //   })[0];

  //   validateCoordinate(ui.clickCoordinate.image, playerGuess);
  // };