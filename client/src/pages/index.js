import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/common/Header/Header";
import { Footer } from "@/common/Footer/Footer";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  LinearProgress,
  Typography,
  Zoom,
} from "@mui/material";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { createSyncV, debugSyncV, useQueryV, useSyncV } from "use-sync-v";

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
  const [state, setState] = useState(defaultState);
  // fetch stage
  const { data, loading, error } = useQueryV("stages", async () => {
    return await FirebaseFirestore.readCol("stages");
  });

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

  useEffect(() => {
    const scrollHandler = (e) => {
      setState((prev) => ({
        ...prev,
        cursor: {
          ...prev.cursor,
          display: false,
        },
      }));
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  // useEffect(() => {
  //   debugSyncV("stages");
  // });
  // useEffect(() => {
  //   const asyncf = (async () => {})();
  // }, []);
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
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
        {/* {data && (
          <Image
            src={data[0].image_url}
            alt="stage1"
            fill
            style={{
              objectFit: "contain",
            }}
            priority
            onLoad={({ target }) => {
              const { naturalWidth, naturalHeight } = target;
              setState((prev) => ({
                ...prev,
                paddingTop: `calc(100% / (${naturalWidth} / ${naturalHeight}))`,
              }));
            }}
            onClick={pointerHandler}
          />
        )} */}

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
      {state?.cursor?.display && (
        <Box>
          <Box
            sx={{
              border: "5px dashed red",
              borderRadius: "100px",
              position: "fixed",
              top: state.cursor.y - 50,
              left: state.cursor.x - 50,
              height: "100px",
              width: "100px",
              backdropFilter: "contrast(120%)",
            }}
          ></Box>
          <Zoom in={state.cursor.x}>
            <ButtonGroup
              orientation="horizontal"
              aria-label="vertical outlined button group"
              sx={{
                position: "fixed",
                top: state.cursor.y - 25,
                left: state.cursor.x + 50,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {state.wantedList
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
      )}

      <Footer />
    </Box>
  );
}
