import { Box, Button, ButtonGroup, Typography, Zoom } from "@mui/material";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { deleteSyncV, readSyncV, updateSyncV, useQueryV, useSyncV } from "use-sync-v";
import { Loading } from "../loading";

const validateCoordinate = (playerCLick, playerGuess) => {
  const { x, y } = playerCLick;
  const { startX, startY, endX, endY } = playerGuess.coordinate;

  // by elimiation
  if (startX > x || startY > y || endX < x || endY < y) {
    updateSyncV("show.notif", true)
    updateSyncV("state.notif", "NOPE");
    setTimeout(() => {
      deleteSyncV("show.notif");
      deleteSyncV("state.notif");
    }, 5000);
    return;
  }

  // if the guess is right
  // remove from wantedList data
  updateSyncV("state.selectedStage.wanted.data", (p) => {
    const filteredData = p.filter((el) => el.doc_id !== playerGuess.doc_id);
    return filteredData;
  });

  // update cloud of times caught
  delete playerGuess.date_created;
  FirebaseFirestore.updateDoc(
    `stages/${readSyncV("state.selectedStage.doc_id")}/wanted/${playerGuess.doc_id}`,
    {
      ...playerGuess,
      times_caught: playerGuess.times_caught + 1,
    }
  );

  // notiy user target is caught
  updateSyncV("show.notif", true);
  updateSyncV("state.notif",`You caught ${playerGuess.name} !`)
  setTimeout(() => {
    deleteSyncV("show.notif");
    deleteSyncV("state.notif")
  }, 5000);

  // check win
  if (readSyncV("state.selectedStage.wanted.data").length === 0) {
    updateSyncV("show.win", true)
    updateSyncV("show.gameScreen", false)
    updateSyncV("show.timer", false)
    
  }
};

export const Snipe = () => {
  const selectedStageDocId = useSyncV("state.selectedStage.doc_id");
  const { x, y } = useSyncV("state.snipe.screen");
  const { data, loading, error } = useQueryV(
    "state.selectedStage.wanted",
    async () => {
      const response = await FirebaseFirestore.readCol(
        `stages/${selectedStageDocId}/wanted/`
      );
      return response;
    }
  );

  const playerClickCoordinate = useSyncV("state.snipe.image");
  const validateCatchHandler = (e) => {
    updateSyncV("show.snipe", false);
    const doc_id = e.target.dataset["doc_id"];

    // get document data for that doc_id
    const playerGuess = data.filter((el) => {
      return el.doc_id === doc_id;
    })[0];

    validateCoordinate(playerClickCoordinate, playerGuess);
  };

  return (
    <Box>
      <Box
        sx={{
          border: "5px dashed red",
          borderRadius: "100px",
          position: "fixed",
          top: y - 50,
          left: x - 50,
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
          top: y - 10,
          left: x - 150,
        }}
      >
        catch ?
      </Typography>
      <Zoom in={true}>
        <ButtonGroup
          orientation="horizontal"
          aria-label="vertical outlined button group"
          sx={{
            position: "fixed",
            top: y - 50,
            left: x + 75,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data &&
            data.map((el, index) => {
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
          {loading && <Loading />}
        </ButtonGroup>
      </Zoom>
    </Box>
  );
};
