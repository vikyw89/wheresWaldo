import { Box, Button, Typography } from "@mui/material";
import { FirebaseFirestore } from "firestore-web-wrapper";
import Image from "next/image";
import { updateSyncV, useQueryV, useSyncV } from "use-sync-v";
import { Loading } from "../loading";

const fetchStages = async () => {
  const response = await FirebaseFirestore.readCol("stages");
  return response;
};

const enterWorld = (worldData) => {
  updateSyncV("show.stageSelector", false)
  updateSyncV("show.gameScreen", true)
  updateSyncV("state.selectedStage", worldData)
}

export const StageSelector = () => {
  const theme = useSyncV("theme");
  const stages = useQueryV("state.stages", fetchStages);

  return (
    <>
      {stages.loading && <Loading />}
      {stages.data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            borderRadius: "20px",
            gap: "10px",
            maxWidth:'100%'
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
            variant="h4"
            color="secondary"
          >
            WORLD SELECTION
          </Typography>
          {stages.loading && <Loading />}
          {stages.data && (
            <swiper-container
              navigation="true"
              // pagination="true"
              effect="flip"
              grab-cursor="true"
              style={{ height: "100%", width: "350px" }}
            >
              {stages.data.map((el, index) => {
                return (
                  <swiper-slide
                    key={index}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        height: "300px",
                        width: "300px",
                        overflow: "hidden",
                        borderRadius: "20px",
                      }}
                    >
                      <Image
                        src={el.thumbnail_url}
                        priority={true}
                        alt="Current Image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <Typography
                      variant="h3"
                      sx={{
                        color: theme.palette.text.primary,
                      }}
                    >
                      {el.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.text.primary,
                      }}
                    >
                      Author : {el.author}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.text.primary,
                      }}
                    >
                      Best Record : --s
                    </Typography>
                    <Button
                      sx={{
                        width: "80%",
                      }}
                      variant="contained"
                      color="success"
                      size="large"
                      onClick={()=>enterWorld(el)}
                    >
                      <Typography variant="h4">Enter</Typography>
                    </Button>
                  </swiper-slide>
                );
              })}
            </swiper-container>
          )}
        </Box>
      )}
    </>
  );
};
