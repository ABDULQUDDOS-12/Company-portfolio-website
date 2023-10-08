import React from "react";
import styles from "./portfolio.module.css";

const Index = () => {
  //   function changeSlide(value) {
  //     data.map(e => e)
  //   }
  return (
    <section className={styles.portfolio}>
      <h1>Our Works</h1>
      <div className={styles.action}>
        <button>2D Models</button>
        <button>3D Models</button>
        <button>Art Scenes</button>
        <button>Badges</button>
        <button>Fanart</button>
        <button>Sketches</button>
        <button>Overlays</button>
        <button>Intro/Outro</button>
        <button>Emotes</button>
        <button>Logo</button>
        <button>Extra</button>
      </div>
      <div className={styles.stage}>
        <h2>2D Models</h2>
        <div className={styles.gallery}>
          <div className={styles.item}></div>
        </div>
      </div>
    </section>
  );
};

export default Index;
