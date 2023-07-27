import React from 'react'
import styles from './SectionHeader.module.css'

export default function SectionHeader({title}) {
  return (
    <h1 className={styles.conatctPageTitle}>{title}</h1>
  )
}
