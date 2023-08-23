import React from 'react'
import styles from './Index.module.css'
import chat from '../../images/chat.webp'
const Index = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftHandContainer}>
                <h3>Turn your bold ideas into a reality.</h3>
                <p>In this digitally competitive environment, allow your firm to inspire, aspire, and perspire! Please contact us as soon as possible!</p>
            </div>
            <div className={styles.rightHandContainer}>
                <div className={styles.chatImageContainer}>
                    <img src={chat} alt="" />
                </div>
                <div className={styles.imageTextContaier}>
                    <h2>CHAT</h2>
                    <p>NOW TO AVAIL</p>
                    <h1>70% OFF</h1>
                </div>
                <div className={styles.buttonContainer}>
                <button>CHAT NOW</button>
                <button>GET STARTED</button>
                </div>
            </div>
        </div>
    )
}

export default Index