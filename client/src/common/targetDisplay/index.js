import { Box, Button, ButtonGroup, Typography, Zoom } from "@mui/material";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { deleteSyncV, updateSyncV, useQueryV, useSyncV } from "use-sync-v";

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

export const TargetDisplay = () => {
  const { x, y } = useSyncV("ui.clickCoordinate.screen");
  const wanted = useQueryV("fetch.wantedList", async () => {
    const response = await FirebaseFirestore.readCol(
      "/stages/5TD3C6tj9uIpUyOpxeQd/wanted/"
    );
    console.log('refetch')
    return response;
  });
  const playerClickCoordinate = useSyncV("ui.clickCoordinate.image")
  const validateCatchHandler = (e) => {
    updateSyncV("ui.showTarget", false);
    const doc_id = e.target.dataset["doc_id"];

    // get document data for that doc_id
    const playerGuess = wanted.data.filter((el) => {
      return el.doc_id === doc_id;
    })[0];

    validateCoordinate(playerClickCoordinate, playerGuess);
  };
console.log(wanted)
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
          top: y - 100,
          left: x - 50,
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
            top: y - 50,
            left: x + 75,
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
  );
};
