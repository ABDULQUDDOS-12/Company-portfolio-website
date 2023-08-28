import React,{useState,useEffect} from 'react'
import styles from './Index.module.css'
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
        <button className={styles.getAQuoteButton}>{buttonText}</button>
      </div>
    </div>
  )
}

export default Index