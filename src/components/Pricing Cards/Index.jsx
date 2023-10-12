import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";
import newstyles from "../Web Packages/Index.module.css";
import { GiCheckMark } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = ({ selectedOption }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const cardData = [
    {
      id: "Starter Package",
      title: "Starter Package",
      checkpoints: [
        "1x Custom Logo",
        "1x Banner (Twitch)",
        "1x Animated Overlay set",
      ],
    },
    {
      id: "Basic Package",
      title: "Basic Package",
      checkpoints: [
        "1x Custom Logo",
        "2x Banners (Twitch & YouTube)",
        "1x Animated Overlay set",
        "1 jQuery Slider Banner",
        "3x Emotes",
        "3x Sub Badges",
      ],
    },
    {
      id: "Mega Package",
      title: "Mega Package",
      checkpoints: [
        "1x Custom Logo",
        "2x Banners (Twitch & YouTube)",
        "1x Animated Intro",
        "1x Animated outro",
        "1x Animated Overlay set",
        "1x Stinger/Transition",
        "3x Emotes",
        "3x Sub Badges",
      ],
    },
    {
      id: "Diamond Package",
      title: "Diamond Package",
      checkpoints: [
        "1x Custom Logo",
        "2x Banners (Twitch & YouTube or for other socials)",
        "1x Animated Intro",
        "1x Animated outro",
        "1x Animated Overlay set",
        "1x Stinger/Transition",
        "1x art scene",
        "4x Emotes",
        "4x Sub Badges",
      ],
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust the screen width as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const filteredCards = isMobile
    ? cardData.filter((card) => card.id === selectedOption)
    : cardData;
  return (
    <div className={styles.mainContainer}>
      <div data-aos="zoom-in-up" className={newstyles.mainHeading}>
        <h1>
          Web <span>packages</span> We Offer
        </h1>
      </div>
      <div data-aos="zoom-in-up" className={newstyles.mainTextContainer}>
        <p>
          We believes in catering unique services in competitive pricing
          structures. We have some fabulous packages carefully crafted for every
          services offered to offer the premium quality within your budget.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        {filteredCards.map((card, index) => (
          <div key={index} className={styles.firstCard}>
            <div className={styles.firstImageContainer}>
              <h2>{card.title}</h2>
            </div>
            <div className={styles.textHeadingContainer}>
              <p>{`Plan Includes:`}</p>
            </div>
            <hr />
            <div className={styles.checkPoints}>
              {card.checkpoints.map((checkpoint, index) => (
                <span key={index}>
                  <GiCheckMark /> {checkpoint}
                  <br />
                </span>
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <button>
                <a href="#agents">CHAT NOW</a>
              </button>
              <button>ORDER NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
