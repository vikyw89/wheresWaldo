import { Html, Head, Main, NextScript } from 'next/document'
import { useSyncV } from 'use-sync-v'

export default function Document() {
  const theme = useSyncV("theme")
  return (
    <Html lang="en">
      <Head />
      <body style={{
        backgroundColor:theme.palette.background.default
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
