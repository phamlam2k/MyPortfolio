import { HomeScreen } from '@components/screens/Home'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lam Pham</title>
      </Head>

      <HomeScreen />
    </div>
  )
}

export default Home
