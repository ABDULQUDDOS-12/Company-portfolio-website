import React from 'react'
import styles from './Index.module.css'
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.image} src="https://customwebsiteagency.com/images/logo.png" alt="" />
      </div>
      <div className={styles.navbarMainContainer}>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>PORTFOLIO</li>
          <li>PACKAGES</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className={styles.getAQuote}>
        <button>Get A Quote</button>
      </div>
    </div>
  )
}

export default Index