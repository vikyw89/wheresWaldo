import { ShowChart } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { useEffect } from "react";
import { readSyncV, updateSyncV, useSyncV } from "use-sync-v";
import { TextBubble } from "./textBubble";

export const Win = () => {
  const theme = useSyncV("theme");
  const show = useSyncV("show");

  const uploadRecord = (e) => {
    const stageDocId = readSyncV("state.selectedStage.data.doc_id");
    const originalDoc = readSyncV("state.stages.data").filter(
      (el) => el.doc_id === stageDocId
    )[0];
    const recordData = {
      name: e.target.value,
      time: readSyncV("state.timer"),
    };

    const updatedDoc = {
      ...originalDoc,
      records: [...originalDoc.records, recordData],
    };
    console.log(updatedDoc);
    // const response = FirebaseFirestore.updateDoc(`stages/${stageDocId}`,updatedDoc)
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <TextBubble text={"YOU WON !"} />
      <TextBubble
        text={`Congratz on winning ${readSyncV(
          "state.selectedWorld.data.name"
        )}`}
      />
      <TextBubble
        text={`Your time record was ${readSyncV("state.timer")} seconds`}
      />

      <Paper
        elevation={10}
        sx={{
          padding: "20px",
          backgroundColor: "hsla(255,80%,80%,80%)",
          borderRadius: "20px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <TextField
          variant="outlined"
          label="Input your name"
          sx={{
            flex: 1,
          }}
        />
        <Button variant="contained" onClick={uploadRecord}>
          Upload record
        </Button>
      </Paper>
    </Box>
  );
};
