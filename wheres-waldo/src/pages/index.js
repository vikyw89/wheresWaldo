import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/common/Header/Header'
import { Footer } from '@/common/Footer/Footer'
import { useTheme } from '@emotion/react'
import { Box } from '@mui/system'
import stage1 from './waldoStage1.jpg'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme()
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  const pointerHandler = (e) => {
    const target = {
      x:e.pageX,
      y:e.pageY
    }
    let {left, top, right, bottom} = e.target.getBoundingClientRect()
    left = left + window.scrollX
    top = top + window.scrollY
    right = right + window.scrollX
    bottom = bottom + window.scrollY

    setCursorX(target.x - window.scrollX)
    setCursorY(target.y - window.scrollY)
  }

  
  useEffect(()=>{
    const scrollHandler = (e) => {
      setCursorX(false)
      console.log(cursorX)
    }
    window.addEventListener('scroll', scrollHandler)
    return ( )=>{
      window.removeEventListener('scroll', scrollHandler)
    }
  },[])
  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      flexDirection:'column',
      minHeight:'100vh',
    }}>
      <Header/>
      <Box sx={{
        flex:1,
        position:'relative',
        width:'100%',
        textAlign:'center',
      }}>
        <Image
          src={stage1}
          alt="stage1"
          style={{
            maxWidth:'90vw',
            width:"auto",
            aspectRatio:1,
            
          }}
          onPointerDown={pointerHandler}
        />
      </Box>
      {cursorX &&
        <Box sx={{
          border: '5px dashed red',
          borderRadius: '100px',
          position:'fixed',
          top:cursorY - 25,
          left:cursorX - 25,
          height: '50px',
          width: '50px',
          backdropFilter: 'contrast(50%)'
        }}>
        </Box>
      }

      <Footer/>
    </Box>
  )
}
