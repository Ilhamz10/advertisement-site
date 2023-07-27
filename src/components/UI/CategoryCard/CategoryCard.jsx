import React from 'react'
import styles from './CategoryCard.module.css'
import Svg from '../Svg/Svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCategoryProducts } from '../../../store/reducers/productReducer'

export default function CategoryCard({
    title,
    text,
    img,
    icon,
    products,
    type,
    click = false,
    href = ''
}) {
    const dispatch = useDispatch()

    function handleClick() {
        if (click) {
            dispatch(setCategoryProducts(products))
        }
    }

    return (
        <Link to={href} className={styles[type]} onClick={handleClick}>
            <div className={styles.iconCont}>
                <Svg
                    icon={icon.name}
                    fill={icon.fill}
                    size={icon.size}
                />
            </div>
            <div className={styles.cardCont}>
                <p className={styles.title}>{title}</p>
                {type === 'service' &&
                    <ul className={styles.text}>
                        {text?.split(/(?=[A-Z])/).map((t, index) => (
                            <li key={index}>{t}</li>
                        ))}
                    </ul>
                }
                {type === 'contact' &&
                    <p className={styles.description}>{text}</p>
                }
            </div>
        </Link>
    )
}
