import React from 'react'
import {useState, useEffect} from 'react'
import { getProducts } from '../../services/products'

export default function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
      console.log(setProducts)
    }
    fetchProducts()
  }, [])

  return (
    <div className='products'>
      {products.map((product, index) => {
        return (
          <div>
            <h1>{product.brand}</h1>
          </div>
        )
      })}
      
    </div>
  )
}
