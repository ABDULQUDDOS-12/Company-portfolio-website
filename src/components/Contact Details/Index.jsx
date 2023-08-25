import React from 'react'
import styles from './Index.module.css'
import { FaPhoneAlt } from "react-icons/fa"
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeading}>
        <h1>Need An Urgent <span>Project Delivered ASAP?</span> Were Waiting For Your <span>Call!</span></h1>
      </div>
      <div className={styles.mainHeadingText}>
        <p>Whatever it is you need, An entirely new website or an old one revamped, Our customer representatives are just a call away to answer all your queries. We’re always excited to start your project.</p>
      </div>
      <div className={styles.mainCardContainer}>
        <div className={styles.content}>
          <p>Toll Free Number</p>
          <div className={styles.phoneDetails}>
            <FaPhoneAlt className={styles.phoneIcon} />
            <p>760-688-4491</p>
          </div>

        </div>
        <div className={styles.quoteContainer}>
          <p>Get a Quote</p>
          <div className={styles.phoneDetails}>
            <p>Live Chat With Us</p>
            <BsFillChatLeftDotsFill className={styles.phoneIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index