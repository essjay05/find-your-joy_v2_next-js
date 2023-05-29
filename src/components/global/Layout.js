import Head from "next/head"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Find Your Joy Portfolio by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        { children }
      </main>
      <Footer/>
    </>
  )
}

export default Layout
