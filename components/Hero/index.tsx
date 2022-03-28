import Image from 'next/image'
import { StyledHero } from './styles'

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <h1>
          <span className='text__1'>EXPLORE THE</span>
          <span className='text__2'>TECH</span>
          <span className='text__2 zone'>ZONE</span>
        </h1>
        <p>
          Here you’ll be able to exchange all of your hard-earned Aeropoints and
          exchange them for cool tech.
        </p>
        <a href='#catalog'>
          <span>VIEW ALL PRODUCTS</span>
          <Image
            src='/assets/icons/arrow-down.svg'
            width='32'
            height='32'
            alt=''
            aria-hidden='true'
          />
        </a>
      </div>
      <div className='hero__img' aria-hidden='true' />
    </StyledHero>
  )
}

export default Hero
