import { Footer } from "@/common/footer";
import { Header } from "@/common/header";
import { Loading } from "@/common/loading";
import { TargetDisplay } from "@/common/targetDisplay";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
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
  stages: {
    data: null,
    loading: true,
    error: false,
  },
  player : {
    
  }
};

export default function Home() {
  const theme = useSyncV("theme.dark");
  const ui = useSyncV("ui");

  // fetch stages
  const { data, loading, error } = useQueryV("fetch.stages", async () => {
    return await FirebaseFirestore.readCol("stages");
  });
  const wanted = useQueryV("fetch.wantedList", async () => {
    const response = await FirebaseFirestore.readCol(
      "/stages/5TD3C6tj9uIpUyOpxeQd/wanted/"
    );
    return response;
  });
  useEffect(() => {
    const checkWin = (wantedList) => {
      if (wantedList.length === 0) {
        updateSyncV("ui.notif", "You won !");
      }
    };
    checkWin(wanted.data);
  }, [wanted.data]);
  useEffect(() => {
    const scrollHandler = (e) => {
      updateSyncV("ui.showTarget", false);
    };
    window.addEventListener("scroll", scrollHandler);
  }, [data]);

  const clickHandler = (e) => {
    if (ui?.showTarget) {
      updateSyncV("ui.showTarget", (p) => {
        return !p;
      });
      return;
    }
    const [x, y] = [e.pageX, e.pageY];
    const { height, width } = e.target;
    const xRelativeCoordinate = Math.floor((x * 100) / width);
    const yRelativeCoordinate = Math.floor((y * 100) / height);
    updateSyncV("ui.clickCoordinate.screen", {
      x: x - window.scrollX,
      y: y - window.scrollY,
    });
    updateSyncV("ui.clickCoordinate.image", {
      x: xRelativeCoordinate,
      y: yRelativeCoordinate,
    });
    updateSyncV("ui.showTarget", true);
  };

  const validateCatchHandler = (e) => {
    updateSyncV("ui.showTarget", false);
    const doc_id = e.target.dataset["doc_id"];

    // get document data for that doc_id
    const playerGuess = wanted.data.filter((el) => {
      return el.doc_id === doc_id;
    })[0];

    validateCoordinate(ui.clickCoordinate.image, playerGuess);
  };

  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.background.default}`,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          position: "relative",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          paddingTop: ``,
        }}
      >
        {data && (
          <div
            style={{
              width: "100%",
              minHeight: "100%",
            }}
          >
            <Image
              src={data[0].image_url}
              alt="Current Image"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              onClick={clickHandler}
            />
          </div>
        )}

        {loading && <Loading />}
      </Box>
      {ui?.notif?.targetCaught && (
        <Typography
          variant="h6"
          sx={{
            color: "red",
            border: "5px dashed red",
            borderRadius: "100px",
            position: "fixed",
            top: ui.clickCoordinate.screen.y - 50,
            left: ui.clickCoordinate.screen.x - 50,
            height: "100px",
            width: "100px",
            backdropFilter: "contrast(120%)",
          }}
        >
          {ui.notif.targetCaught}
        </Typography>
      )}
      {ui?.showTarget && <TargetDisplay />}
      <Footer />
    </Box>
  );
}
