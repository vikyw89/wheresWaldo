import { Box, Button, Typography } from '@mui/material'
import { FirebaseFirestore } from 'firestore-web-wrapper'
import Image from 'next/image'
import { useEffect } from 'react'
import { updateSyncV, useQueryV, useSyncV } from 'use-sync-v'
import { Loading } from '../loading'

const fetchStages = async () => {
  const response = await FirebaseFirestore.readCol('stages')
  return response
}

const enterWorld = (worldData) => {
  updateSyncV('show.stageSelector', false)
  updateSyncV('show.gameScreen', true)
  updateSyncV('state.selectedStage', worldData)
}

export const StageSelector = () => {
  const theme = useSyncV('theme')
  const stages = useQueryV('state.stages', fetchStages)

  useEffect(()=>{

  })
  return (
    <>
      {stages.loading && <Loading />}
      {stages.data && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '20px',
            gap: '10px',
            maxWidth: '100%',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            variant="h4"
            color="secondary"
          >
            WORLD SELECTION
          </Typography>
          {stages.loading && <Loading />}
          {stages.data && (
            <swiper-container
              navigation="true"
              effect="flip"
              grab-cursor="true"
              style={{ height: '100%', maxWidth: '600px' }}
            >
              {stages.data.map((el, index) => {
                return (
                  <swiper-slide
                    key={index}
                    style={{
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      display: 'flex',
                      // flexDirection: "column",
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      gap: '10px',
                      border: '1px solid white',
                      padding: '10px',
                    }}
                  >
                    <div
                      style={{
                        height: '300px',
                        width: '300px',
                        overflow: 'hidden',
                        borderRadius: '20px',
                      }}
                    >
                      <Image
                        src={el.thumbnail_url}
                        priority={true}
                        alt="Current Image"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: theme.palette.text.primary,
                        }}
                      >
                        {el.name}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: theme.palette.text.primary,
                        }}
                      >
                        Author : {el.author}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: theme.palette.text.primary,
                        }}
                      >
                        Best Records :
                      </Typography>
                      <Box sx={{
                        overflowY:'scroll',
                        height:'100%'
                      }}>
                        {el?.records.sort((a,b)=>a.time - b.time).map((el2, index2) => {
                          return (
                            <Box key={index2} sx={{
                              // border:'1px solid red',
                              color:'white',
                              display:'flex',
                              justifyContent:'space-between',
                              borderRadius:'5px',
                              backgroundColor:'hsla(255,80%,80%,40%)',
                              padding:'5px'
                            }}>
                              <Typography>{el2.name}</Typography>
                              <Typography>{el2.time}s</Typography>
                            </Box>
                          )
                        })}
                      </Box>
                    </Box>
                    <Button
                      sx={{
                        width: '100%',
                      }}
                      variant="contained"
                      color="success"
                      size="large"
                      onClick={() => enterWorld(el)}
                    >
                      <Typography variant="h4">Enter</Typography>
                    </Button>
                  </swiper-slide>
                )
              })}
            </swiper-container>
          )}
        </Box>
      )}
    </>
  )
}
