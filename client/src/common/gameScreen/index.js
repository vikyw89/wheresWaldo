import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { TargetDisplay } from "../targetDisplay";

export const GameScreen = () => {
  return (
    <>
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
    </>
  );
};
