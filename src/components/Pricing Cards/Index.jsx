import React from 'react'
import styles from './Index.module.css'
import banner1 from '../../images/Banner 1.png'
const Index = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.cardsContainer}>
                <div className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={banner1} alt="" className={styles.firstImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index