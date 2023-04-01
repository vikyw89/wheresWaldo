import { Footer } from '@/common/footer'
import { GameScreen } from '@/common/gameScreen'
import { Header } from '@/common/header'
import { StageSelector } from '@/common/stageSelector'
import { Win } from '@/common/win'
import { Box } from '@mui/system'
import { updateSyncV, useSyncV } from 'use-sync-v'

export const state = {
  show: {
    stageSelector: true,
    snipe: false,
    timer: false,
    notif: false,
    stageEdit: false,
    gameScreen: false,
    win: false,
  },
  state: {
    stages: null,
    selectedStage: null,
    notif: null,
  },
}

updateSyncV('show', state.show)
updateSyncV('data', state.state)
export default function Home() {
  const show = useSyncV('show')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        margin: '0 auto',
      }}
    >
      <Header />
      {show.stageSelector && <StageSelector />}
      {show.gameScreen && <GameScreen />}
      {show.win && <Win />}
      <Footer />
    </Box>
  )
}
