import React from 'react'
import styles from './Header.module.css'
import Svg from '../../UI/Svg/Svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCategoryProducts } from '../../../store/reducers/productReducer'
import { products } from './products'

export default function Header() {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(setCategoryProducts(products))
    }

    return (
        <header>
            <div className="container">
                <div className={styles.headerInner}>
                    <div className={styles.logo}>
                        <h1>SmartPromo.az</h1>
                    </div>
                    <nav className={styles.nav}>
                        <div className={styles.menuBtn}>
                            <Svg fill={'white'} icon={'menu'} size={29} />
                        </div>
                        <ul>
                            <li>
                                <Link to={'/'}>Ana Səhifə</Link>
                            </li>
                            <li>
                                <Link to={'missions'}>Missiyamiz</Link>
                            </li>
                            <li>
                                <Link to={'contacts'}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to={'contacts'}>Xidmətlərlərimiz</Link>
                            </li>
                            <li>
                                <Link onClick={handleClick} to={'category_page'}>Avadanliqramiz</Link>
                            </li>
                            <li>
                                <Link to={'contacts'}>Əlaqə</Link>
                            </li>
                        </ul>
                        <a className={styles.shopingBtn} href="">Online Satis</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
