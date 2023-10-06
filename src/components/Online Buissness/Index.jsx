import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";
import mockup from "../../images/mockup.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showArrow, setShowArrow] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    setShowArrow(scrollY > windowHeight);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div id="buisness">
      <div data-aos="zoom-in" className={styles.mainContainer}>
        <div className={styles.leftHandContainer}>
          <div className={styles.mainHeading}>
            <h1>
              Elevate Your <span>Vision</span>
            </h1>
          </div>
          <div className={styles.textContainer}>
            <p>
              Elevate Your Vision with STS Designs. Our mission is to transform
              your ideas into visually stunning realities. With a team of
              passionate and skilled designers, we take pride in crafting
              captivating overlays and dynamic animations that leave a lasting
              impression.We understand the power of design in conveying your
              message effectively.
            </p>
            <p>
              Choose us for unparalleled quality, prompt project delivery,
              competitive pricing, and the dedication to bring your creative
              vision to life. Join us on this creative journey and discover how
              STS Designs can elevate your brand, engage your audience, and make
              your vision a reality.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button>GET STARTED</button>
            <button>CHAT WITH US</button>
          </div>
        </div>
        <div className={styles.rightHandContainer}>
          <div className={styles.foregroundImage}>
            <img src={mockup} alt="" />
          </div>
        </div>
      </div>
      {showArrow && (
        <div onClick={scrollToTop} className={styles.upArrowContainer}>
          <BsFillArrowUpCircleFill className={styles.arrowUp} />
        </div>
      )}
    </div>
  );
};

export default Index;
