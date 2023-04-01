import { Box, CircularProgress, Typography } from '@mui/material'

export const Loading = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <CircularProgress sx={{ width: '80vw' }} />
      <Typography variant="h5">Loading Stage</Typography>
    </Box>
  )
}