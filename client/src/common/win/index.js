import { ShowChart } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FirebaseFirestore } from "firestore-web-wrapper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { readSyncV, updateAsyncV, updateSyncV, useSyncV } from "use-sync-v";
import { TextBubble } from "./textBubble";

export const Win = () => {
  const theme = useSyncV("theme");
  const show = useSyncV("show");
  const stageDocId = readSyncV("state.selectedStage.doc_id");
  const originalDoc = readSyncV("state.stages.data").filter(
    (el) => el.doc_id === stageDocId
  )[0];
  const [name, setName] = useState("");
  console.log({ stageDocId, originalDoc });

  const uploadRecord = () => {
    const newRecord = {
      name: name,
      time: readSyncV("state.timer"),
    };

    const updatedDoc = {
      ...originalDoc,
      records: [...originalDoc.records, newRecord],
    };

    const response = FirebaseFirestore.updateDoc(
      `stages/${stageDocId}`,
      updatedDoc
    );

    window.location.reload(false);
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button variant="contained" onClick={uploadRecord}>
          Upload record
        </Button>
      </Paper>
    </Box>
  );
};
