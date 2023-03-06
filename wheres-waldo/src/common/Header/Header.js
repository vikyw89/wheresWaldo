import { useTheme } from '@emotion/react'
import { Paper, Typography } from '@mui/material'

export const Header = () => {
    const theme = useTheme()
    return (
        <Paper elevation="1" sx={{
            backgroundColor:theme.palette.background.paper,
            padding: '10px',
            textAlign: 'center',
        }}>
            <Typography variant="h4">
                whereIs
            </Typography>
        </Paper>
    )
}