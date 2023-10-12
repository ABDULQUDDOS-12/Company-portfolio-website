import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import personImage from "../../images/t1.webp";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import office from "../../images/office.webp";
import comma from "../../images/commas.webp";

const Index = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const handleNextButtonClick = () => {
    setShowSecondImage((prev) => !prev);
    setShowFirstImage((prev) => !prev);
  };

  const handlePreviousButtonClick = () => {
    setShowSecondImage((prev) => !prev);
    setShowFirstImage((prev) => !prev);
  };

  return (
    <div data-aos="zoom-in-up" className={styles.mainContainer}>
      <div className={styles.leftHandContainer}>
        <div className={styles.mainHeading}>
          <h1>
            Our <span>Customers</span> Can Help You Know Us <span>Better!</span>
          </h1>
          <p>
            We have served thousands of businesses across various industries.
            Here are some of our valuable clients sharing their views about our
            web design and development services in the US.
          </p>
        </div>
      </div>
      {showFirstImage && (
        <div className={styles.rightHandContainer}>
          <div className={styles.imageContainer}>
            <img src={personImage} alt="" className={styles.image} />
            <h3>MeoTheComputerWizard</h3>
            <AiFillLeftCircle
              onClick={handlePreviousButtonClick}
              className={styles.leftCircle}
            />
            <AiFillRightCircle
              onClick={handleNextButtonClick}
              className={styles.rightCircle}
            />
          </div>
          <div className={styles.chatContainer}>
            <div className={styles.commaImageContainer}>
              <img src={comma} alt="" className={styles.commaImage} />
            </div>
            <div className={styles.textContainer}>
              <p>
                Had some emotes made a while back by Clara and they came out
                wonderfully, y'all should check them out if you ever need any
                emotes done or things of the like.
              </p>
            </div>
          </div>
        </div>
      )}
      {showSecondImage && (
        <div className={styles.rightHandContainer}>
          <div className={styles.imageContainer}>
            <img src={personImage} alt="" className={styles.image} />
            <h3>Chroma</h3>
            <AiFillLeftCircle
              onClick={handlePreviousButtonClick}
              className={styles.leftCircle}
            />
            <AiFillRightCircle
              onClick={handleNextButtonClick}
              className={styles.rightCircle}
            />
          </div>
          <div className={styles.chatContainer}>
            <div className={styles.commaImageContainer}>
              <img src={comma} alt="" className={styles.commaImage} />
            </div>
            <div className={styles.textContainer}>
              <p>
                Hello! I just want to give a big shout out to Clara for doing my
                emotes and sub badges! She has a good payment plan and I believe
                her currently running an Easter Discount! She does other works
                as well! Thank you for your hard work! Much love!
              </p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.officeImageContainer}>
        <img src={office} alt="" className={styles.officeImage} />
      </div>
    </div>
  );
};

export default Index;
