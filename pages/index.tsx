import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Head>
        <meta name="theme-color" content="#ff80ff" />
        <meta
          name="description"
          content="Desafio Aerolab front-end hecho por Carlos Ramirez"
        />
        <meta
          property="og:title"
          content="Desafio AeroLab - Carlos Ramirez"
        />
        <meta property="og:locale" content="es_AR" />
        <meta
          property="og:url"
          content="google.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Desafio Aerolab front-end hecho por Carlos Ramirez"
        />
        <meta property="og:image" content="https://i.imgur.com/afIg9Zl.png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Desafio Aerolab - Carlos Ramirez"
        />
        <meta
          name="twitter:url"
          content="google.com"
        />
        <meta
          name="twitter:description"
          content="Desafio Aerolab front-end hecho por Carlos Ramirez"
        />
        <meta name="twitter:image" content="https://i.imgur.com/afIg9Zl.png" />
        <meta
          name="twitter:image:alt"
          content="Desafio AerloLab - Carlos Ramirez"
        />
        <title>Aerolab Challenge</title>
      </Head>
      <NavBar/>
    </>
  )
}

export default Home
