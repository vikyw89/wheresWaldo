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
import { where } from "firebase/firestore";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { debugSyncV, updateSyncV, useQueryV, useSyncV } from "use-sync-v";

const inter = Inter({ subsets: ["latin"] });

const defaultState = {
  wantedList: [
    {
      name: "evilMinion",
      isFound: false,
    },
    {
      name: "babaYaga",
      isFound: false,
    },
    {
      name: "bowser",
      isFound: false,
    },
  ],
  stage: false,
  paddingTop: 0,
  cursor: {
    display: false,
    x: undefined,
    y: undefined,
  },
};

export default function Home() {
  const theme = useSyncV("theme.dark");
  const ui = useSyncV("ui");
  // fetch stage
  const { data, loading, error } = useQueryV("stages", async () => {
    return await FirebaseFirestore.readCol("stages");
  });

  // debugSyncV("stages.data")
  const clickHandler = (e) => {
    if (ui?.showTarget) {
      updateSyncV("ui.showTarget", false);
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
      x:xRelativeCoordinate,
      y:yRelativeCoordinate
    })
    updateSyncV("ui.showTarget", true);
    debugSyncV("ui.clickCoordinate.image");

    // checkCoordinate();
  };

  const pointerHandler = (e) => {
    // target frame toggle
    if (state.cursor.display) {
      setState((prev) => ({
        ...state,
        cursor: {
          ...prev.cursor,
          display: false,
        },
      }));
      return;
    }

    const [x, y] = [e.pageX, e.pageY];
    const { height, width } = e.target;
    const xRelativeCoordinate = Math.floor((x * 100) / width);
    const yRelativeCoordinate = Math.floor((y * 100) / height);
    setState((prev) => ({
      ...prev,
      cursor: {
        ...prev.cursor,
        display: true,
        x: x - window.scrollX,
        y: y - window.scrollY,
      },
    }));
    console.log("click");
  };

  const selectWantedHandler = (e) => {
    console.log(e);
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
        overflow: "hidden",
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
          overflow: "hidden",
          paddingTop: ``,
        }}
      >
        {data && (
          <div
            style={{
              width: "100%",
              minHeight: "100vh",
              height: "auto",
              overflowY: "scroll",
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

      {/* {ui?.showTarget && (
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
          <Zoom in={ui.clickCoordinate.screen.x}>
            <ButtonGroup
              orientation="horizontal"
              aria-label="vertical outlined button group"
              sx={{
                position: "fixed",
                top: ui.clickCoordinate.screen.y - 25,
                left: ui.clickCoordinate.screen.x + 50,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {ui.wantedList
                .filter((el) => el.isFound === false)
                .map((el, index) => {
                  return (
                    <Button key={index} variant="contained" color="error">
                      {el.name}
                    </Button>
                  );
                })}
            </ButtonGroup>
          </Zoom>
        </Box>
      )} */}

      <Footer />
    </Box>
  );
}
