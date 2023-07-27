import React from 'react'
import styles from './Footer.module.css'
import Svg from '../../UI/Svg/Svg'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.companyInfo}>
                        <div className={styles.logo}>
                            <h1>SmartPromo.az</h1>
                        </div>
                        <div className={styles.info}>
                            <p>Naxçıvanda reklam sahəsinə innovativ yeniliklər gətirən firmamız, regionda aparıcı rola malik olmağı, həmçinin tətbiq etdiyi yeniliklər və kreativliyi ilə müştərilərin məmnuniyyətini daimyüksək səviyyədə tutmağı hədəfləyir. Müasir avadanlıqlar və peşəkar komandamız ilə reklam sahəsində çox istiqamətli həllər təklif edirik.</p>
                        </div>
                    </div>
                    <div className={styles.footerLinks}>
                        <h2>Kecidler</h2>
                        <p>Ana Səhifə</p>
                        <p>Haqqımızda</p>
                        <p>Portfolio</p>
                        <p>Müştərilərimiz</p>
                        <p>Xidmətlərlərimiz</p>
                        <p>Əlaqə</p>
                    </div>
                    <div className={styles.companyContacts}>
                        <p>+994(55) 655 55 56</p>
                        <p>smartpromo@gmail.com</p>
                        <p>Ceyhun Hacibeyli 33 kuc.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
