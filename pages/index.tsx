import type { NextPage } from 'next'
import Head from 'next/head'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/Navbar'
import Walkthrough from '../components/Walkthrough'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='theme-color' content='#ff80ff' />
        <meta
          name='description'
          content='Desafio Aerolab front-end hecho por Carlos Ramirez'
        />
        <meta property='og:title' content='Desafio AeroLab - Carlos Ramirez' />
        <meta property='og:locale' content='es_AR' />
        <meta property='og:url' content='https://aerochallengex.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='Desafio Aerolab front-end hecho por Carlos Ramirez'
        />
        <meta property='og:image' content='https://i.imgur.com/afIg9Zl.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Desafio Aerolab - Carlos Ramirez' />
        <meta name='twitter:url' content='https://aerochallengex.vercel.app/' />
        <meta
          name='twitter:description'
          content='Desafio Aerolab front-end hecho por Carlos Ramirez'
        />
        <meta name='twitter:image' content='https://i.imgur.com/afIg9Zl.png' />
        <meta
          name='twitter:image:alt'
          content='Desafio AeroLab - Carlos Ramirez'
        />
        <title>Aerolab Challenge</title>
      </Head>
      <NavBar />
      <div className='wave__patterns'>
        <Hero />
        <Walkthrough />
      </div>
      <Catalog />
      <Footer />
    </>
  )
}

export default Home
