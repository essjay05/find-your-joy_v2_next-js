import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Find Your Joy Portfolio by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout
