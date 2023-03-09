import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/common/Header/Header'
import { Footer } from '@/common/Footer/Footer'
import { useTheme } from '@emotion/react'
import { Box } from '@mui/system'
import stage1 from './waldoStage1.jpg'
import { useEffect, useRef, useState } from 'react'
import { Avatar, Button, CircularProgress, LinearProgress, Typography, Zoom } from '@mui/material'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { FirebaseStorage } from '@/lib/firebase/firebase'
const inter = Inter({ subsets: ['latin'] })

const wantedData = [
  {
    name:'evilMinion',
    portrait:'/evilMinion.png',
    isFound:false
  },
  {
    name:'babaYaga',
    portrait:'/babaYaga.png',
    isFound:false
  },
  {
    name:'bowser',
    portrait:'/bowser.png',
    isFound:false
  }
]

export default function Home() {
  const theme = useTheme()
  const [wanted, setWanted] = useState(wantedData)
  const [stage, setStage] = useState()
  const [paddingTop, setPaddingTop] = useState('0');
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  const pointerHandler = (e) => {
    if (cursorX) {
      setCursorX()
      return
    }
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

  const selectCharHandler = (e) => {
    console.log(e)
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

  useEffect(()=>{
    const background = FirebaseStorage.getURL('images/waldoStage1.jpg')
      .then(responseURL=>{
        const stageData = {
          backgroundURL: responseURL
        }
        setStage(stageData)
      })
    // (async()=>{
    //   const imageURL =  await FirebaseStorage.getURL('images/waldoStage1.jpg')
    //   const stageData = {
    //     backgroundURL: imageURL
    //   }
    //   setStage(stageData)
    // })()
  },[])
  return (
    <Box sx={{
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      flexDirection:'column',
      minHeight:'100vh',
      width:'100vw',
      padding:0,
      margin:0,
      overflow:'hidden'
    }}>
      <Header/>
      {stage
        ?
        <Box sx={{
          flex:1,
          position:'relative',
          width:'100vw',
          display:'flex',
          justifyContent:'center',
          overflow:'hidden'
          }}
          style={{paddingTop}}
        >
          <Image
            src={stage.backgroundURL}
            alt="stage1"
            fill
            style={{
              objectFit:"contain",
            }}
            priority
            onLoad={({ target }) => {
              const { naturalWidth, naturalHeight } = target
              setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
            }}
            onClick={pointerHandler}
          />
        </Box>
        :
        <Box sx={{ width: '100%', flex:'1', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
          <CircularProgress sx={{ width:'80vw'}}/>
          <Typography variant="h5">Loading Stage</Typography>
        </Box>
      }
      {cursorX &&
        <Box>
          <Box sx={{
            border: '5px dashed red',
            borderRadius: '100px',
            position:'fixed',
            top:cursorY - 50,
            left:cursorX - 50,
            height: '100px',
            width: '100px',
            backdropFilter: 'contrast(120%)'
          }}>
          </Box>
          <Zoom in={cursorX}>
            <Box sx={{
              borderRadius:'99px',
              position:'fixed',
              top:cursorY - 25,
              left:cursorX + 50,
              display:'flex'
            }}>
              {
                wanted.map((el,index)=>{
                  return (
                    <Avatar
                      key={index}
                      alt={el.name}
                      src={el.portrait}
                      onClick={selectCharHandler}
                    />
                  )
                })
              }
            </Box>
          </Zoom>
        </Box>
      }

      <Footer/>
    </Box>
  )
}
