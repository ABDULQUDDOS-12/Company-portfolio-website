import React, { useEffect } from 'react'
import styles from './Index.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import personImage from '../../images/t1.png'
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import office from '../../images/office.webp'
import comma from '../../images/commas.jpeg'
const Index = () => {
    useEffect(() => {

        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation timing function
        }); // Initialize AOS
    }, []);
    return (
        <div data-aos="zoom-in-up" className={styles.mainContainer}>
            <div className={styles.leftHandContainer}>
                <div className={styles.mainHeading}>
                    <h1>Our <span>Customers</span> Can Help You Know Us <span>Better!</span></h1>
                    <p>We have served thousands of businesses across various industries. Here are some of our valuable clients sharing their views about our web design and development services in the US.</p>
                </div>
            </div>
            <div className={styles.rightHandContainer}>
                <div className={styles.imageContainer}>
                    <img src={personImage} alt="" className={styles.image} />
                    <h2>Erika Blackwell</h2>
                    <AiFillLeftCircle className={styles.leftCircle} />
                    <AiFillRightCircle className={styles.rightCircle} />
                </div>
                <div className={styles.chatContainer}>
                    <div className={styles.commaImageContainer}>
                        <img src={comma} alt="" className={styles.commaImage} />
                    </div>
                    <div className={styles.textContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus accusantium unde quasi corporis. Sint laboriosam est assumenda.</p>
                    </div>
                </div>
            </div>
            <div className={styles.officeImageContainer}>
                <img src={office} alt="" className={styles.officeImage} />
            </div>
        </div>
    )
}

export default Index