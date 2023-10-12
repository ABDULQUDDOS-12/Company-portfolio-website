import React from "react";
import styles from "./Index.module.css";
import logo from "../../images/logo.webp";
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" className={styles.logoImage} />
        </div>
        <div className={styles.textContainer}>
          <p>
            At STS Designs, we not only craft websites but also forge limitless
            avenues for your brand to capture leads and experience remarkable
            conversions.
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© STS Designs. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Index;
