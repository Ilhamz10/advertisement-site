import React from 'react'
import classes from './DropDown.module.css'
import { Link } from 'react-router-dom'

export default function DropDown({items, label}) {
  return (
    <button className={classes.dropDown}>
        {label}
        <ul>
            {items.map(item => (
                <li key={item.category}>
                  <Link>{item.category}</Link>
                </li>
            ))}
        </ul>
    </button>
  )
}
