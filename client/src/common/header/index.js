import { useSyncLocalStorage, useSyncSessionStorage } from '@/lib/hooks/useSync'
import { useTheme } from '@emotion/react'
import { Button, Paper, Typography } from '@mui/material'
import { useEffect } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { debugSyncV, useSyncV } from 'use-sync-v';

export const Header = () => {
    const [activeTheme, setActiveTheme] = useSyncSessionStorage('theme')
    const theme = useSyncV("theme.dark")

    const clickHandler = () => {
        setActiveTheme(activeTheme === 'light' ? 'dark' : 'light')
    }
    return (
        <Paper elevation={1} sx={{
            padding: '10px',
            textAlign: 'center',
            position:'fixed',
            width:'100%',
            top:'0px',
            zIndex:'10',
            backgroundColor:'hsla(255,90%,30%,0%)',
            backdropFilter:'contrast(150%)'
        }}>
            <Typography variant="h4" sx={{
                color:`${theme.palette.primary.contrastText}`
            }}>
                whereIs ?
            </Typography>
        </Paper>
    )
}