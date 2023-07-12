import '/styles/globals.css'
import { Lato } from 'next/font/google'
import { Roboto } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
})


export default function App({ Component, pageProps }) {
  // console.log(pageProps)
  return (
    <main className= {roboto.className}>
      <Component {...pageProps} />
    </main>
    
  )
  
}
