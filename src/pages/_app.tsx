import "../../public/styles.css"
import type { AppProps } from 'next/app'
 import Layout from '../components/layouts/mainLayout';


export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>    <Component {...pageProps} /> </Layout>
  
  )
}