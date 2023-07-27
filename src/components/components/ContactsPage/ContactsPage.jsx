import React from 'react'
import styles from './ContactsPage.module.css'
import CategoryCard from '../../UI/CategoryCard/CategoryCard'
import { contacts } from './contacts'
import img from '../../../assets/images/form_illustrator.png'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'

export default function ContactsPage() {
    return (
        <div>
            <SectionHeader title={'Elaqe'}/>
            <div className="container">
                <div className={styles.contacts}>
                    {contacts.map((contact) => (
                        <CategoryCard
                            type={'contact'}
                            icon={contact.icon}
                            title={contact.title}
                            text={contact.text}
                        />
                    ))}
                </div>
                <div className={styles.formCont}>
                    <h1>Bir mesaj yazın</h1>
                    <p>Bir ideanız var? Onu bizimlə bölüş, reallaşdıraq!</p>
                    <div className={styles.formInner}>
                        <form>
                            <input type="text" placeholder='Ad' />
                            <input type="text" placeholder='Email' />
                            <input type="text" placeholder='Telefon' />
                            <textarea name="" placeholder='Mesajiniz' id=""></textarea>
                        </form>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
