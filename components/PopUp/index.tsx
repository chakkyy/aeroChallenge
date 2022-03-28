import { StyledPopUp } from './styles'
import Image from 'next/image'
import { ChangeEvent, useContext, useState } from 'react'
import { Context } from '../../context'

interface Props {
  handleClick: () => void
}

const PopUp = ({ handleClick }: Props) => {
  const [addedPoints, setAddedPoints] = useState(0)
  const value = useContext(Context)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddedPoints(Number(e.target.value))
  }

  const handlePoints = () => {
    value?.setUser({
      ...value.user,
      points: value.user.points + addedPoints
    })
  }

  return (
    <StyledPopUp>
      <div className='header'>
        <p>Add Balance</p>
        <button aria-label='Cerrar' onClick={handleClick}>
          <Image
            src='/assets/icons/cross-default.svg'
            width='18'
            height='18'
            alt='Close Button'
          />
        </button>
      </div>
      <Image
        src='/assets/illustrations/credit-card.svg'
        width='280'
        height='160'
        alt='Tarjeta de crédito'
      />
      <div className='radio__buttons'>
        <input
          type='radio'
          name='points'
          id='value1'
          value='1000'
          onChange={handleChange}
        />
        <label htmlFor='value1'>
          <span>1000</span>
        </label>
        <input
          type='radio'
          name='points'
          id='value2'
          value='5000'
          onChange={handleChange}
        />
        <label htmlFor='value2'>
          <span>5000</span>
        </label>
        <input
          type='radio'
          name='points'
          id='value3'
          value='7500'
          onChange={handleChange}
        />
        <label htmlFor='value3'>
          <span>7500</span>
        </label>
      </div>
      <button
        aria-label={`Add ${addedPoints} points`}
        onClick={handlePoints}
        className='add__points'
        disabled={addedPoints === 0}
      >
        <Image
          src='/assets/icons/aeropay-3.svg'
          width='24'
          height='24'
          alt=''
        />
        <span>Add Points</span>
      </button>
    </StyledPopUp>
  )
}

export default PopUp
