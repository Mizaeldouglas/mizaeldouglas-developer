import '/styles/globals.scss'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color='#2a6f97'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} />
    </>)
}
