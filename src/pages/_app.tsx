import { store } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react';




export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>  <Component {...pageProps} /> <Analytics /></Provider>
}
