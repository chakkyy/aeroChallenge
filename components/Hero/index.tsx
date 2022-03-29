import Image from 'next/image'
import { StyledHero, Title } from './styles'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <Title
          initial={{ opacity: 0, x: -100 }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{ duration: 1 }}
        >
          <span className='text__1'>EXPLORE THE</span>
          <span className='text__2'>TECH</span>
          <span className='text__2 zone'>ZONE</span>
        </Title>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{ duration: 2 }}
        >
          Here you’ll be able to exchange all of your hard-earned Aeropoints and
          exchange them for cool tech.
        </motion.p>
        <motion.a
          href='#catalog'
          initial={{ opacity: 0, y: -70 }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{ ease: 'linear', duration: 1.5, delay: 1 }}
        >
          <span>VIEW ALL PRODUCTS</span>
          <Image
            src='/assets/icons/arrow-down.svg'
            width='32'
            height='32'
            alt=''
            aria-hidden='true'
          />
        </motion.a>
      </div>
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className='hero__img'
        aria-hidden='true'
      />
    </StyledHero>
  )
}

export default Hero
