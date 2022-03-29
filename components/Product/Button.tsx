import Image from 'next/image'
import { useContext } from 'react'
import { Btn } from './styles'
import { Product } from '../Catalog'
import { Context } from '../../context'

interface Props {
  handleClick: () => void
  isProcessing: boolean
  canRedeem: boolean
  cost: number
}

const Button = (props: Props) => {
  const { handleClick, isProcessing, canRedeem, cost } = props
  return (
    <Btn
      onClick={handleClick}
      className={isProcessing ? 'processing' : undefined}
      disabled={!canRedeem}
    >
      {isProcessing ? (
        'Processing'
      ) : (
        <>
          <span>{canRedeem ? 'Redeem for' : 'You need'}</span>
          <Image
            className='img'
            src={
              canRedeem
                ? '/assets/icons/aeropay-3.svg'
                : '/assets/icons/aeropay-4.svg'
            }
            width='24'
            height='24'
            alt=''
          />
          <span>{cost}</span>
        </>
      )}
    </Btn>
  )
}

export default Button
