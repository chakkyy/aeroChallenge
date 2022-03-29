import { StyledNavBar } from './styles'
import AeropayDropdown from '../AeropayDropdown'
import Link from 'next/link'

const NavBar = () => {
  return (
    <StyledNavBar
      initial={{ opacity: 0, y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 3 }}
    >
      <Link href='/'>
        <a>
          <span className='temp__fix'>aerolab</span>
        </a>
      </Link>
      <AeropayDropdown />
    </StyledNavBar>
  )
}

export default NavBar
