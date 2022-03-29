import { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import NotificationsContainer from '../NotificationsContainer'
import Pagination from '../Pagination'
import Product from '../Product'
import { StyledCatalog, MobilePagination } from './styles'
import Spinner from '../Spinner'
import { motion } from 'framer-motion'

export interface Product {
  _id: string
  name: string
  cost: number
  quantity: number
  category: string
  loading: boolean
  img: {
    url: string
    hdUrl: string
  }
}

type SortTypes = 'Most Recent' | 'Lowest Price' | 'Highest Price'

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [defaultSort, setDefaultSort] = useState<SortTypes>('Most Recent')
  const [mostRecentProduct, setMostRecentProduct] = useState<Product[]>([])
  const [amountPerPage, setAmountPerPage] = useState(16)
  const [filtered, setFiltered] = useState(false)
  const [loading, setLoading] = useState(true)
  const categorias = Array.from(new Set(products.map(p => p.category)))

  const resizeFunction = () => {
    if (window.innerWidth <= 375) {
      setAmountPerPage(8)
    } else if (window.innerWidth <= 1024) {
      setAmountPerPage(12)
    } else {
      setAmountPerPage(16)
    }
  }

  useEffect(() => {
    setFilteredProducts(products => products.slice(0, amountPerPage))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener('resize', resizeFunction)
    return () => {
      window.removeEventListener('resize', resizeFunction)
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch('https://coding-challenge-api.aerolab.co/products', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxZTAyNGRlNjZjMTAwMjFmMTVkNzkiLCJpYXQiOjE2NDg0ODQzODh9.cVu7GHdtSVR2yD935rDw1uhcNrywsq0sbI3hG-Ql-4E'
        }
      })
        .then(response => response.json())
        .then(response => {
          setLoading(false)
          setMostRecentProduct(response)
          setProducts(response)
          resizeFunction()
          setFilteredProducts(response.slice(0, amountPerPage))
        })
    }, 1000)
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const displayProducts = () => {
    if (currentPage === 1) {
      setFilteredProducts(() => products.slice(0, amountPerPage))
    } else {
      setFilteredProducts(() =>
        products.slice(
          amountPerPage * (currentPage - 1),
          amountPerPage * currentPage
        )
      )
    }
  }

  useEffect(() => displayProducts(), [currentPage]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSort = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'Most Recent') {
      setCurrentPage(1)
      setProducts(mostRecentProduct)
      setFilteredProducts(mostRecentProduct.slice(0, amountPerPage))
      setDefaultSort('Most Recent')
      return
    }
    setCurrentPage(1)
    let productsCopy = [...products]
    setProducts(
      productsCopy.sort((a, b) => {
        const costA = a.cost
        const costB = b.cost
        return e.target.value === 'Lowest Price' ? costA - costB : costB - costA
      })
    )
    setFilteredProducts(productsCopy.slice(0, amountPerPage))
    setDefaultSort(
      e.target.value === 'Lowest Price' ? 'Lowest Price' : 'Highest Price'
    )
  }

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setFilteredProducts(products.slice(0, amountPerPage))
      setFiltered(false)
      setCurrentPage(1)
      return
    }
    setFilteredProducts(products.filter(p => p.category === e.target.value))
    setFiltered(true)
    setCurrentPage(1)
  }

  const handleMobilePaginate = () => {
    setLoading(true)
    setTimeout(() => {
      const mobileCurrentProducts = filteredProducts.length + amountPerPage
      setFilteredProducts(products.slice(0, mobileCurrentProducts))
      setLoading(false)
    }, 1000)
  }

  return (
    <StyledCatalog id='catalog'>
      <NotificationsContainer />
      <motion.h2
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <span>TECH</span> PRODUCTS
      </motion.h2>
      <div className='container'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, type: 'spring', bounce: 0.25, delay: 1 }}
          className='flex__container'
        >
          <div className='filter__container'>
            <label
              className={`label__filter ${
                amountPerPage !== 16 ? 'temp__fix' : ''
              }`}
              htmlFor='filter'
            >
              Filter By
            </label>
            <select
              onChange={handleFilter}
              className='filter__select'
              id='filter'
            >
              <option value='all'>All Products</option>
              {categorias.map(c => {
                return (
                  <option key={c} value={c}>
                    {c}
                  </option>
                )
              })}
            </select>
          </div>
          <div className='sort__container'>
            <p className={amountPerPage !== 16 ? 'temp__fix' : ''}>Sort by:</p>
            <input
              type='radio'
              name='points'
              id='value1'
              value='Most Recent'
              checked={defaultSort === 'Most Recent'}
              onChange={handleSort}
            />
            <label htmlFor='value1'>
              <span>Most Recent</span>
            </label>
            <input
              type='radio'
              name='points'
              id='value2'
              value='Lowest Price'
              checked={defaultSort === 'Lowest Price'}
              onChange={handleSort}
            />
            <label htmlFor='value2'>
              <span>Lowest Price</span>
            </label>
            <input
              type='radio'
              name='points'
              id='value3'
              value='Highest Price'
              checked={defaultSort === 'Highest Price'}
              onChange={handleSort}
            />
            <label htmlFor='value3'>
              <span>Highest Price</span>
            </label>
          </div>
        </motion.div>
        {amountPerPage !== 8 && (
          <Pagination
            productAmount={filtered ? filteredProducts.length : products.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            amountPerPage={amountPerPage}
          />
        )}
      </div>
      <div className='products'>
        {filteredProducts.map((p, index) => (
          <Product index={index} loading={loading} product={p} key={p._id} />
        ))}
      </div>
      {loading && (
        <div className='spinner__container'>
          <Spinner />
        </div>
      )}

      {amountPerPage > 8 ? (
        <Pagination
          productAmount={filtered ? filteredProducts.length : products.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          amountPerPage={amountPerPage}
        />
      ) : (
        <MobilePagination
          onClick={handleMobilePaginate}
          disabled={filteredProducts.length == products.length}
        >
          <Image
            src='/assets/icons/aeropay-1.svg'
            width='32'
            height='32'
            alt='aeroLogo'
          />
          <span>Show More</span>
        </MobilePagination>
      )}
      <footer>
        <p>
          <span className='span'>
            {filteredProducts.length} of {products.length}
          </span>
          products
        </p>
      </footer>
    </StyledCatalog>
  )
}
