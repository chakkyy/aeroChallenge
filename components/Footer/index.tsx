import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GitHub from '../../public/assets/icons/github-default.svg'
import { StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Link href='https://github.com/chakkyy/aeroChallenge' passHref>
        <a className='repo' target='_blank'>
          <Image src={GitHub} alt='github-logo' />
          <span>View this repository</span>
        </a>
      </Link>
    </StyledFooter>
  )
}

export default Footer
