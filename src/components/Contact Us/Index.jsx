import React from 'react'
import styles from './Index.module.css'
import { FaPhoneFlip } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
const Index = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.formContainer}>
                <div className={styles.leftContainer}>
                    <form action="">
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Your Phone' />
                        <input type="text" placeholder='Your Email' />
                        <textarea name="" id="" cols="30" rows="5" placeholder='Enter Your Messages'></textarea>
                        <button>Lets Connect</button>
                    </form>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.mainHeading}>
                        <h1>Get Free <span>Consultancy</span></h1>
                    </div>
                    <div className={styles.officeContact}>
                        <h3>HEAD OFFICE</h3>
                        <p>6 Jean Drive, Towaco, Montville, New Jersey 07082, USA</p>
                    </div>
                    <div className={styles.officeContact}>
                        <h3>REGIONAL OFFICE</h3>
                        <p>Howard Hughes Center, 6080 Center Drive, 6th Floor, Los Angeles, California, 90045</p>
                    </div>
                    <div className={styles.contactDetails}>
                        <FaPhoneFlip className={styles.phoneIcone} />
                        <p> (760) 688-4491</p>
                    </div>
                    <div className={styles.contactDetails}>
                        <HiMail className={styles.mailIcon} />
                        <p>support@custom websiteagency.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index