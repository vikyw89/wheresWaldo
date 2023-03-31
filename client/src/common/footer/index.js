import { useTheme } from '@emotion/react'
import { Paper, Typography } from '@mui/material'
import { useSyncV } from 'use-sync-v'

export const Footer = () => {
    const theme = useSyncV("theme")

    return (
        <Paper elevation={10} sx={{
            backgroundColor:'hsla(0,100%,100%,0%)',
            zIndex:'10',
            padding: '10px',
            textAlign: 'center',
            position:'fixed',
            bottom:'0',
            width:'100%',
            backdropFilter:'contrast(150%)'
        }}>
            <Typography variant="h7" sx={{
                color:theme.palette.text.primary
            }}>
                Made by Viky for The Odin Project 2023
            </Typography>
        </Paper>
    )
}