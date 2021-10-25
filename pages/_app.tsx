// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <div> <Head><title>Northwind</title></Head> <Component {...pageProps} /></div>
}
export default MyApp
