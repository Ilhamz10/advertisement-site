import React from 'react'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import styles from './MissionPage.module.css'
import missonImg from '../../../assets/images/mission_illurstration.png'

export default function MsissionPage() {
  return (
    <>
        <SectionHeader title='Missiyamiz'/>
        <div className="container">
            <div className={styles.missionPage}>
                <div className={styles.mission}>
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odio, magnam repellendus aspernatur similique veritatis laboriosam quasi praesentium ad quaerat deleniti corporis, quos aliquam? Similique ratione nemo sequi aperiam repellat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi assumenda aperiam vel nam aliquam voluptates incidunt, blanditiis recusandae doloremque earum mollitia sapiente fugit beatae at minus, sed, voluptate architecto doloribus.</p>
                </div>
                <img src={missonImg} alt="" />
            </div>
        </div>
    </>
  )
}
