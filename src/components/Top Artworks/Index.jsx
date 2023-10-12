import React, { useEffect } from "react";

import styles from "./Index.module.css";
import firstPortfolioImage from "../../images/firstPortfolio.webp";
import secondPortfolioImage from "../../images/secondPortfolio.webp";
import thirdPortfolioImage from "../../images/thirdPortfolio.webp";
import forthPortfolioImage from "../../images/forthPortfolio.webp";
import fifthPortfolioImage from "../../images/fifthPortfolio.webp";
import sixthPortfolioImage from "../../images/sixthPortfolio.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation timing function
    }); // Initialize AOS
  }, []);
  return (
    <div className={styles.mainContainer} id="portfolio">
      <div data-aos="zoom-in-up" className={styles.mainHeading}>
        <h1>
          Our Top <span>2D/3D</span> Artworks
        </h1>
        <p>Having Spent Years In The Industry, Here are our top artworks</p>
      </div>
      <div className={styles.wrapper}>
        <div data-aos="zoom-in-up" className={styles.firstImage}>
          <img
            src={firstPortfolioImage}
            alt=""
            className={styles.hoverZoomImage}
          />
        </div>
        <div data-aos="zoom-in-up" className={styles.secondImage}>
          <img
            src={secondPortfolioImage}
            alt=""
            className={styles.secondhoverZoomImage}
          />
        </div>
        <div data-aos="zoom-in-up" className={styles.secondImage}>
          <img
            src={thirdPortfolioImage}
            alt=""
            className={styles.secondhoverZoomImage}
          />
        </div>
        <div data-aos="zoom-in-up" className={styles.firstImage}>
          <img
            src={forthPortfolioImage}
            alt=""
            className={styles.hoverZoomImage}
          />
        </div>
        <div data-aos="zoom-in-up" className={styles.secondImage}>
          <img
            src={fifthPortfolioImage}
            alt=""
            className={styles.thirdhoverZoomImage}
          />
        </div>
        <div data-aos="zoom-in-up" className={styles.secondImage}>
          <img
            src={sixthPortfolioImage}
            alt=""
            className={styles.forthhoverZoomImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
