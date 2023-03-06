import { useTheme } from '@emotion/react'
import { Paper, Typography } from '@mui/material'

export const Footer = () => {
    const theme = useTheme()
    return (
        <Paper elevation="1" sx={{
            backgroundColor:theme.palette.background.paper,
            padding: '10px',
            textAlign: 'center',
        }}>
            <Typography variant="h7">
                Made by Viky for The Odin Project 2023
            </Typography>
        </Paper>
    )
}