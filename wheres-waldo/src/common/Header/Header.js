import { useSyncLocalStorage, useSyncSessionStorage } from '@/lib/hooks/useSync'
import { useTheme } from '@emotion/react'
import { Button, Paper, Typography } from '@mui/material'
import { useEffect } from 'react'

export const Header = () => {
    const [state, setState] = useSyncLocalStorage('test')
    const [activeTheme, setActiveTheme] = useSyncSessionStorage('theme')
    const theme = useTheme()

    const clickHandler = () => {
        // setActiveTheme(activeTheme === 'dark' ? 'light' : 'dark')
        setState(state + 1)
        setActiveTheme(activeTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <Paper elevation={1} sx={{
            // backgroundColor:theme.palette.background.paper,
            padding: '10px',
            textAlign: 'center',
            position:'fixed',
            width:'100%',
            top:'0px',
            zIndex:'10',
            backgroundColor:'hsla(255,90%,30%,0%)',
            backdropFilter:'contrast(150%)'
        }}>
            <Button onClick={clickHandler}>
                Click
            </Button>
            <Typography variant="h4" >
                whereIs ? {state}
            </Typography>
        </Paper>
    )
}