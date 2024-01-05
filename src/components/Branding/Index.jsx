import React, { useEffect } from "react";
import styles from "./Index.module.css";
import image from "../../images/b1.webp";
import moneyImage from "../../images/b21.webp";
import clientImage from "../../images/b22.webp";
import clockImage from "../../images/b23.webp";
import computerImage from "../../images/b24.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation timing function
    }); // Initialize AOS
  }, []);
  return (
    <div data-aos="zoom-in-up" className={styles.mainContainer}>
      <div className={styles.leftHandContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" className={styles.image} />
        </div>
      </div>
      <div className={styles.rightHandContainer}>
        <div className={styles.mainHeading}>
          <h3>
            Elevate Your
            <span> Brand</span> and Expand Your Professional Horizons with
            <span> STS Designs</span>
          </h3>
        </div>
        <div className={styles.textContainer}>
          <p>
            Cultivate a strong visual identity and stand out from the
            competition. With our exceptional design services, including
            mesmerizing overlays and dynamic animations, we empower your brand
            to make a memorable impact. Join us on a journey of creativity,
            where your success is our ultimate goal.
          </p>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.firstIconContainer}>
            <div className={styles.firstImageContainer}>
              <img src={computerImage} alt="" className={styles.firstImage} />
            </div>
            <div className={styles.iconText}>
              <p>Client Satisfaction</p>
            </div>
          </div>
          <div className={styles.firstIconContainer}>
            <div className={styles.firstImageContainer}>
              <img src={clientImage} alt="" className={styles.firstImage} />
            </div>
            <div className={styles.iconText}>
              <p>24/7 Support</p>
            </div>
          </div>
          <div className={styles.firstIconContainer}>
            <div className={styles.firstImageContainer}>
              <img src={clockImage} alt="" className={styles.firstImage} />
            </div>
            <div className={styles.iconText}>
              <p>Unique Designs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
