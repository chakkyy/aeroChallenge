import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { Product } from '../Catalog'
import { StyledPagination } from './styles'

interface Props {
  productAmount: number
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  amountPerPage: number
}

export default function Pagination({
  productAmount,
  currentPage,
  setCurrentPage,
  amountPerPage
}: Props) {
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const previousPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const totalPages = Math.ceil(productAmount / amountPerPage)

  return (
    <StyledPagination
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 1 }}
    >
      <button
        onClick={previousPage}
        disabled={currentPage === 1}
        aria-label='página anterior'
      >
        <Image
          className='chevron'
          src='/assets/icons/chevron-down.svg'
          width='15'
          height='8'
          alt=''
        />
      </button>
      <p>
        Page{' '}
        <span>
          {currentPage} of {totalPages || '1'}
        </span>
      </p>
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        aria-label='página siguiente'
      >
        <Image
          className='chevron'
          src='/assets/icons/chevron-down.svg'
          width='15'
          height='8'
          alt=''
        />
      </button>
    </StyledPagination>
  )
}
