import { useContext, useState } from 'react'
import { StyledProduct } from './styles'
import Image from 'next/image'
import { Product as IProduct } from '../Catalog'
import { Context } from '../../context'
import Button from './Button'
import Spinner from '../Spinner'

interface Props {
  product: IProduct
  loading: boolean
  index: number
}

export default function Product(props: Props) {
  const { product, loading, index } = props
  const { category, name, img, cost } = product

  const { user, setUser } = useContext(Context)!
  const [isProcessing, setIsProcessing] = useState(false)

  const canRedeem = user.points >= cost

  const handleClick = () => {
    setIsProcessing(true)
    setTimeout(() => {
      let newProducts: IProduct[]
      if (user.products.find(p => p._id === product._id)) {
        newProducts = user.products.map(p => {
          if (p._id === product._id) {
            p.quantity += 1
          }
          return p
        })
      } else {
        newProducts = [...user.products, product]
      }
      setIsProcessing(false)
      setUser(user => {
        return {
          ...user,
          points: user.points - cost,
          products: newProducts
        }
      })
    }, 1000)
  }

  return (
    <StyledProduct
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: (index + 1) * 0.02 }}
      viewport={{ once: true }}
    >
      <div className='product__top'>
        <div className='product__img'>
          {loading ? (
            <Spinner />
          ) : (
            <Image src={img.hdUrl} alt={name} width='280' height='204' /> || (
              <Image
                className='img'
                src='/assets/icons/aeropay-5.svg'
                width='78'
                height='72'
                alt=''
              />
            )
          )}
        </div>

        <div className='product__info'>
          <p className='product__name'>{name}</p>
          <p className='product__category'>{category}</p>
        </div>
      </div>
      <Button
        handleClick={handleClick}
        isProcessing={isProcessing}
        canRedeem={canRedeem}
        cost={cost}
      />
    </StyledProduct>
  )
}
