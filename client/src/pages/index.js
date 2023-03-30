import { Footer } from "@/common/footer";
import { Header } from "@/common/header";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Typography,
  Zoom,
} from "@mui/material";
import { Box } from "@mui/system";
import { updateDoc, where } from "firebase/firestore";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  debugSyncV,
  deleteSyncV,
  updateSyncV,
  useQueryV,
  useSyncV,
} from "use-sync-v";

const inter = Inter({ subsets: ["latin"] });

const validateCoordinate = (playerCLick, playerGuess) => {
  const { x, y } = playerCLick;
  const { startX, startY, endX, endY } = playerGuess.coordinate;

  // by elimiation
  if (startX > x || startY > y || endX < x || endY < y) {
    updateSyncV("ui.notif.targetCaught", "who's that ??");
    setTimeout(() => {
      deleteSyncV("ui.notif.targetCaught");
    }, 5000);
    return;
  }

  // if the guess is right
  // remove from wantedList data
  updateSyncV("fetch.wantedList.data", (p) => {
    const filteredData = p.filter((el) => el.doc_id !== playerGuess.doc_id);
    return filteredData;
  });

  // update cloud of times caught
  delete playerGuess.date_created;
  FirebaseFirestore.updateDoc(
    `stages/5TD3C6tj9uIpUyOpxeQd/wanted/${playerGuess.doc_id}`,
    {
      ...playerGuess,
      times_caught: playerGuess.times_caught + 1,
    }
  );

  // notiy user target is caught
  updateSyncV("ui.notif.targetCaught", `You caught ${playerGuess.name} !`);
  setTimeout(() => {
    deleteSyncV("ui.notif.targetCaught");
  }, 5000);
};

export default function Home() {
  const theme = useSyncV("theme.dark");
  const ui = useSyncV("ui");

  // fetch stage
  const { data, loading, error } = useQueryV("fetch.stages", async () => {
    return await FirebaseFirestore.readCol("stages");
  });
  const wanted = useQueryV("fetch.wantedList", async () => {
    const response = await FirebaseFirestore.readCol(
      "/stages/5TD3C6tj9uIpUyOpxeQd/wanted/"
    );
    return response;
  });

  const scrollHandler = () => {
    console.log("scroll");
    updateSyncV("ui.showTarget", false);
  };

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
              // height: "auto",
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

        {loading && (
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              border: "5px solid red",
            }}
          >
            <CircularProgress sx={{ width: "80vw" }} />
            <Typography variant="h5">Loading Stage</Typography>
          </Box>
        )}
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
      {ui?.showTarget && (
        <Box>
          <Box
            sx={{
              border: "5px dashed red",
              borderRadius: "100px",
              position: "fixed",
              top: ui.clickCoordinate.screen.y - 50,
              left: ui.clickCoordinate.screen.x - 50,
              height: "100px",
              width: "100px",
              backdropFilter: "contrast(120%)",
            }}
          ></Box>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              position: "fixed",
              top: ui.clickCoordinate.screen.y - 100,
              left: ui.clickCoordinate.screen.x - 50,
            }}
          >
            who's this ?
          </Typography>
          <Zoom in={true}>
            <ButtonGroup
              orientation="horizontal"
              aria-label="vertical outlined button group"
              sx={{
                position: "fixed",
                top: ui.clickCoordinate.screen.y - 50,
                left: ui.clickCoordinate.screen.x + 75,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {wanted?.data &&
                wanted.data.map((el, index) => {
                  return (
                    <Button
                      key={el.doc_id}
                      variant="contained"
                      color="error"
                      onClick={validateCatchHandler}
                      data-doc_id={el.doc_id}
                    >
                      {el.name}
                    </Button>
                  );
                })}
            </ButtonGroup>
          </Zoom>
        </Box>
      )}

      <Footer />
    </Box>
  );
}
