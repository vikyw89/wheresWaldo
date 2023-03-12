import '@/styles/globals.css'
import { purple,red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Firebase, FirebaseConfigInit, FirebaseInit } from '@/lib/firebase/config';
import { useSyncLocalStorage } from '@/lib/hooks/useSyncLocalStorage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  }
});

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useSyncLocalStorage('theme')
  const [state, setState] = useSyncLocalStorage('test')
  console.log(state)
  return (
    <ThemeProvider theme={theme === 'dark' ? lightTheme : darkTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
