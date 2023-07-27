import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import styles from './CategoryPage.module.css'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'

export default function CategoryPage() {
  const products = useSelector(state => state.product.products)

  return (
    <>
      <SectionHeader title={'Avadanliqramiz'}/>
      <div className="container">
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  )
}