import { useTheme } from '@emotion/react'
import { Paper, Typography } from '@mui/material'

export const Header = () => {
    const theme = useTheme()
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
            <Typography variant="h4">
                whereIs ?
            </Typography>
        </Paper>
    )
}