import { useTheme } from '@emotion/react'
import { Paper, Typography } from '@mui/material'

export const Footer = () => {
    const theme = useTheme()
    return (
        <Paper elevation="1" sx={{
            // backgroundColor:theme.palette.background.paper,
            backgroundColor:'hsla(0,100%,100%,0%)',
            zIndex:'10',
            padding: '10px',
            textAlign: 'center',
            position:'fixed',
            bottom:'0',
            width:'100%',
            backdropFilter:'contrast(150%)'
        }}>
            <Typography variant="h7">
                Made by Viky for The Odin Project 2023
            </Typography>
        </Paper>
    )
}