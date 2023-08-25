import React from 'react'
import styles from './Index.module.css'
import logo from '../../images/logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Index = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="" className={styles.logoImage} />
                </div>
                <div className={styles.textContainer}>
                    <p>We build website and create unlimited pathways for the brand to capture leads and enjoy unexpected conversions.</p>
                </div>
            </div>
        </div>
    )
}

export default Index