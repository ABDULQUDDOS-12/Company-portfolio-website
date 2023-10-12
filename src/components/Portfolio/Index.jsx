import React, { useState } from "react";
import styles from "./portfolio.module.css";

const Index = () => {
  const [category, setCategory] = useState("");

  function changeCategory(value) {
    setCategory(value);
  }
  const categories = {
    Model2D: [],
    Model3D: [],
    ArtScenes: [],
    Badges: [],
    Fanart: [],
    Sketches: [],
    Overlay: [],
    IntroOutro: [],
  };
  return (
    <section className={styles.portfolio}>
      <h1>Our Works</h1>
      <div className={styles.action}>
        <button onClick={() => changeCategory("Model2D")}>2D Models</button>
        <button onClick={() => changeCategory("Model3D")}>3D Models</button>
        <button onClick={() => changeCategory("ArtScenes")}>Art Scenes</button>
        <button onClick={() => changeCategory("Badges")}>Badges</button>
        <button onClick={() => changeCategory("Fanart")}>Fanart</button>
        <button onClick={() => changeCategory("Sketches")}>Sketches</button>
        <button onClick={() => changeCategory("Overlay")}>Overlays</button>
        <button onClick={() => changeCategory("IntroOutro")}>
          Intro/Outro
        </button>
        <button onClick={() => changeCategory("Emotes")}>Emotes</button>
        <button onClick={() => changeCategory("Logo")}>Logo</button>
        <button onClick={() => changeCategory("Extra")}>Extra</button>
      </div>
      <div className={styles.stage}>
        <h2>2D Models</h2>
        <div className={styles.gallery}>
          {categories[category].map((item, id) => (
            <div className={styles.item}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
