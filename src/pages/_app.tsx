import type { AppProps } from 'next/app'
import '/styles/globals.css'
import Loading from '../../components/Loader'





export default function App({ Component, pageProps }: AppProps) {
  return (<><Component {...pageProps} /></>)
}

