import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useEffect } from 'react'
import { deleteSyncV, updateSyncV, useSyncV } from 'use-sync-v'
import { Snipe } from '../snipe'

const imageClickHandler = (e) => {
  updateSyncV('show.snipe', (p) => !p)

  const [x, y] = [e.pageX, e.pageY]
  const { height, width } = e.target
  const xRelativeCoordinate = Math.floor((x * 100) / width)
  const yRelativeCoordinate = Math.floor((y * 100) / height)

  updateSyncV('state.snipe.screen', {
    x: x - window.scrollX,
    y: y - window.scrollY,
  })

  updateSyncV('state.snipe.image', {
    x: xRelativeCoordinate,
    y: yRelativeCoordinate,
  })
}

export const GameScreen = () => {
  const selectedStage = useSyncV('state.selectedStage')
  const show = useSyncV('show')
  const snipe = useSyncV('state.snipe')
  const notif = useSyncV('state.notif')

  useEffect(() => {
    const scrollHandler = () => {
      updateSyncV('show.snipe', false)
      deleteSyncV('show.notif')
    }
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [selectedStage])

  const startTimer = () => {
    updateSyncV('show.timer', true)
  }
  return (
    <>
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '',
        }}
      >
        {selectedStage && (
          <div
            style={{
              width: '100%',
              minHeight: '100%',
            }}
          >
            <Image
              src={selectedStage.image_url}
              alt={selectedStage.name}
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              onClick={imageClickHandler}
              onLoad={startTimer}
            />
          </div>
        )}
      </Box>
      {show?.notif && (
        <Typography
          variant="h6"
          sx={{
            color: 'red',
            border: '5px dashed red',
            borderRadius: '100px',
            position: 'fixed',
            top: snipe.screen.y - 50,
            left: snipe.screen.x - 50,
            height: '100px',
            width: '100px',
            backdropFilter: 'contrast(120%)',
          }}
        >
          {notif}
        </Typography>
      )}
      {show?.snipe && <Snipe />}
    </>
  )
}
