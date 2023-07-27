import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { setCurrentProductAction } from '../../../store/reducers/productReducer'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(setCurrentProductAction(product))
  }

  return (
    <div className={styles.productCard}>
      <img src={product.img} alt="" />
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
      </div>
      <Link onClick={handleClick} to={'/product_page'} className={styles.detailsBtn}>Etrafli</Link>
    </div>
  )
}
