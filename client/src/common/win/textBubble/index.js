import { Paper, Typography } from "@mui/material";

export const TextBubble = ({text}) => {
  return (
    <Paper
      elevation={10}
      sx={{
        backgroundColor: "hsla(255,80%,80%,80%)",
        backdropFilter: "contrast(200%)",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <Typography color="primary" variant="h4" sx={{
        textAlign:'center'
      }}>
        {text}
      </Typography>
    </Paper>
  );
};