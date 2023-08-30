import React,{useState,useEffect} from 'react'
import styles from './Index.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'
const Index = () => {
  const [buttonText, setButtonText] = useState("Get A Quote");
  const changeButtonText = () => {
    if (window.innerWidth <= 768) {
      setButtonText("Quote");
    } else {
      setButtonText("Get A Quote"); // Reset the text for larger screens
    }
  };
  useEffect(() => {
    window.addEventListener("resize", changeButtonText);
    return () => {
      window.removeEventListener("resize", changeButtonText);
    };
  }, []);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.image} src="https://customwebsiteagency.com/images/logo.png" alt="" />
      </div>
      <div className={showMediaIcons? styles.mobilemenuLink : styles.navbarMainContainer}>
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
        <button className={styles.getAQuoteButton}>{buttonText}</button>
      </div>
      <div className={styles.hamburgerMenu}>
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className={styles.hambergerMenuIcon}/>
          </a>
        </div>
    </div>
  )
}

export default Index