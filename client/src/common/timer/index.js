import { Box } from "@mui/material"
import { useEffect, useState } from "react"

export const Timer = () => {
    const [time, setTime] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime((p)=>p+1)
        },1000)
    },[])
    return (
        <Box>
            
        </Box>
    )
}