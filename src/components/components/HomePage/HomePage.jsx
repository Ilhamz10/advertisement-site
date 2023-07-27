import React, { useMemo } from 'react'
import styles from './HomePage.module.css'
import CategoryCard from '../../UI/CategoryCard/CategoryCard'
import { categories } from './categories'
import slide1 from '../../../assets/images/slide2.png'
import slide2 from '../../../assets/images/slide3.png'
import slide3 from '../../../assets/images/slide4.png'
import slide4 from '../../../assets/images/slide5.png'
import Carousel from "nuka-carousel"
import Svg from '../../UI/Svg/Svg'
import { services } from './services'
import videoImg from '../../../assets/images/video.png'
import headerImg from '../../../assets/images/header_illurstration.png'

export default function HomePage() {
  return (
    <div>
      {/* <Carousel
        autoplay={1000}
        wrapAround={true}
        defaultControlsConfig={{
          pagingDotsClassName: styles.sliderDots,
          nextButtonClassName: styles.nextBtn,
          prevButtonClassName: styles.prevBtn,
          prevButtonText: <Svg fill={'white'} icon={'prev'} size={30} />,
          nextButtonText: <Svg fill={'white'} icon={'next'} size={30} />,
          pagingDotsContainerClassName: styles.dotsCont
        }}
      >
        <img style={{ width: '100%' }} src={slide1} />
        <img style={{ width: '100%' }} src={slide2} />
        <img style={{ width: '100%' }} src={slide3} />
        <img style={{ width: '100%' }} src={slide4} />
      </Carousel> */}
      <div className="container">
        <section className={styles.headerSection}>
          <div className={styles.headerContext}>
            <h1><span style={{color: '#2CB570'}}>Lorem ipsum</span> dolor sit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime. Quia, animi?</p>
            <button>Get Started</button>
          </div>
          <div className={styles.headerImage}>
            <img src={headerImg} alt="" />
          </div>
        </section>
        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Xidmetlerimiz</h2>
          <div className={styles.serviceGrid}>
            {services.map(service => (
              <CategoryCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                type='service'
                text={service.description}
              />
            ))}
          </div>
        </section>
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Haqqimizda</h2>
          <div className={styles.aboutSectionInner}>
            <div className={styles.aboutText}>
              <h4>Haqqimizda</h4>
              <p> Naxçıvanda reklam sahəsinə innovativ yeniliklər gətirən firmamız, regionda aparıcı rola malik olmağı, həmçinin tətbiq etdiyi yeniliklər və kreativliyi ilə müştərilərin məmnuniyyətini daimyüksək səviyyədə tutmağı hədəfləyir. Müasir avadanlıqlar və peşəkar komandamız ilə reklam sahəsində çox istiqamətli həllər təklif edirik.</p>
              <p>Çalışdığımız firmalara qazandırdığımız bütün müsbət xüsusiyyətlərin qürurunu bugün hər kəslə paylaşırıq. Bizimlə əməkdaşlıq etmək istəyən və keyfiyyətə önəm verən bütün firmalara yüksək xidmət göstərməyə hazırıq.</p>
            </div>
            <div className={styles.aboutVideo}>
              <img src={videoImg} alt="" />
              <p>SmartPromo.az tanitim videosu</p>
              <button className={styles.playBtn}>
                <Svg icon={'play'} size={20} />
              </button>
            </div>
          </div>
        </section>
        {/* <section className={styles.categoriesSection}>
          <h2 className={styles.sectionTitle}>Kateqoriyalar</h2>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
                products={category.products}
                type='category'
              />
            ))}
          </div>
        </section> */}
      </div>
    </div>
  )
}
