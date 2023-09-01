import React from 'react'
import styles from './Index.module.css'
import { BiRightArrowCircle } from "react-icons/bi";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Index = () => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation timing function
    
      });
    return (
        <div className={styles.mainContainer} id='empowering-buisness'>
            <div  className=  {styles.leftHandContainer}>
                <div className={styles.mainHeading}>
                    <h1>We <span>Empower</span> Your Buisness</h1>
                </div>
                <div className={styles.importantPoints}>
                    <h2>Top Rated Website Design Service</h2>
                    <h2>Trendy Yet Professional</h2>
                    <h2>Business Website <span>Only In $249</span></h2>
                </div>
                <div className={styles.checkPoints}>
                    <div className={styles.checkpointNumbers}>
                        <BiRightArrowCircle className={styles.rightArrow} /><h2>Best Website Design Service</h2>
                    </div>
                    <div className={styles.checkpointNumbers}>
                        <BiRightArrowCircle className={styles.rightArrow} /><h2>Unlimited Revisions</h2>
                    </div>
                    <div className={styles.checkpointNumbers}>
                        <BiRightArrowCircle className={styles.rightArrow} /><h2>Fastest Turnaround Time</h2>
                    </div>
                    <div className={styles.checkpointNumbers}>
                        <BiRightArrowCircle className={styles.rightArrow} /><h2>100% Customer Satisfaction</h2>
                    </div>
                </div>
                <div className={styles.empowerButtons}>
                    <button>GET STARTED</button>
                    <button>CHAT WITH US</button>
                </div>
            </div>
            <div id='quote' className={styles.rightHandContainer}>
                <div className={styles.formHeadings}>
                    <h3>Lets Get Started</h3>
                    <h1>Avail Upto 70% Discount</h1>
                </div>
                <form action="">
                    <input type="text" placeholder='Your Name' /> <br />
                    <input type="text" placeholder='Your Email' /> <br />
                    <input type="text" placeholder='Your Phone' /> <br />
                    <textarea name="" id="" cols="30" rows="4" placeholder='Enter Your Messages'></textarea>
                <button>LETS GET STARTED</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Index