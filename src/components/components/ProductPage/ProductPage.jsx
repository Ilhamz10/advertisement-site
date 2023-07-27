import React from 'react'
import styles from './ProductPage.module.css'
import img1 from '../../../assets/images/1.png'
import { useSelector } from 'react-redux'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'

export default function ProductPage() {
    const product = useSelector(state => state.product.currentProduct)

    return (
        <>
            <SectionHeader title={product.title} />
            <div className="container">
                <div className={styles.productPage}>
                    <div className={styles.imageContainer}>
                        <img src={product.img} alt="" />
                    </div>
                    <div className={styles.productInfo}>
                        <p className={styles.productName}><span>{product.title}</span></p>
                        <p className={styles.productDescription}>{product.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
