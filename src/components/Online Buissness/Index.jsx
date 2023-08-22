import React from 'react'
import styles from './Index.module.css'
import mockup from '../../images/mockup.webp'
const Index = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftHandContainer}>
                <div className={styles.mainHeading}>
                    <h1>Get Your <span>Business</span> Online Today!</h1>
                </div>
                <div className={styles.textContainer}>
                    <p>We're an Award-Winning Website Design Company. Our aim is to provide the best website design service that is affordable for small business and corporates. Top-Rated website designer & web application development company in Los Angeles, California.</p>
                    <p>Custom Website Agency is a creative web design agency with a sole purpose to develop exclusive things for our beloved clients. We believe in building meaningful and long-term relationships with our clients and their brands through our creative designs, web development and engaging software solutions.</p>
                </div>
                <div className={styles.buttonContainer}>
                 <button>GET STARTED</button>
                  <button>CHAT WITH US</button>
                </div>
            </div>
            <div className={styles.rightHandContainer}>
                <div className={styles.foregroundImage}>
                 <img src={mockup} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Index