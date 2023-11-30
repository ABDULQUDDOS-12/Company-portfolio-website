import React, { useState } from "react";
import styles from "./portfolio.module.css";

import { MdArrowRight, MdArrowLeft } from "react-icons/md";

// Portfolio Imports Start

// Models
import model2d_one from "../../images/portfolio/2D Model/2d model-1.webp";
import model2d_two from "../../images/portfolio/2D Model/2d model-2.webp";
import model2d_three from "../../images/portfolio/2D Model/2d model-3.webp";
import model2d_four from "../../images/portfolio/2D Model/2d model-4.webp";
import model2d_five from "../../images/portfolio/2D Model/2d model-5.webp";

import model3d_one from "../../images/portfolio/3D Model/3d model-1.webp";
import model3d_two from "../../images/portfolio/3D Model/3d model-2.webp";

//ArtScenes
import artscenes_one from "../../images/portfolio/Art Scenes/art scenes-1.webp";
import artscenes_two from "../../images/portfolio/Art Scenes/art scenes-2.mp4";
import artscenes_three from "../../images/portfolio/Art Scenes/art scenes-3.webp";
import artscenes_four from "../../images/portfolio/Art Scenes/art scenes-4.mp4";

//Badges
import badges_one from "../../images/portfolio/Badges/badges-1.webp";
import badges_two from "../../images/portfolio/Badges/badges-2.webp";
import badges_three from "../../images/portfolio/Badges/badges-3.webp";

//Emotes
import emote_one from "../../images/portfolio/Emotes/emote-1.webp";
import emote_two from "../../images/portfolio/Emotes/emote-2.webp";
import emote_three from "../../images/portfolio/Emotes/emote-3.mp4";
import emote_four from "../../images/portfolio/Emotes/emote-4.webp";
import emote_five from "../../images/portfolio/Emotes/emote-5.webp";
import emote_six from "../../images/portfolio/Emotes/emote-6.mp4";
import emote_seven from "../../images/portfolio/Emotes/emote-7.webp";
import emote_eight from "../../images/portfolio/Emotes/emote-8.webp";
import emote_nine from "../../images/portfolio/Emotes/emote-9.webp";
import emote_ten from "../../images/portfolio/Emotes/emote-10.webp";
import emote_eleven from "../../images/portfolio/Emotes/emote-11.webp";
import emote_twelve from "../../images/portfolio/Emotes/emote-12.webp";
import emote_thirteen from "../../images/portfolio/Emotes/emote-13.webp";
import emote_fourteen from "../../images/portfolio/Emotes/emote-14.webp";
import emote_fifteen from "../../images/portfolio/Emotes/emote-15.webp";
import emote_sixteen from "../../images/portfolio/Emotes/emote-16.webp";
import emote_seventeen from "../../images/portfolio/Emotes/emote-17.webp";
import emote_eighteen from "../../images/portfolio/Emotes/emote-18.webp";
import emote_nineteen from "../../images/portfolio/Emotes/emote-19.webp";
import emote_twenty from "../../images/portfolio/Emotes/emote-20.webp";
import emote_twentyOne from "../../images/portfolio/Emotes/emote-21.webp";
import emote_twentyTwo from "../../images/portfolio/Emotes/emote-22.webp";
import emote_twentyThree from "../../images/portfolio/Emotes/emote-23.webp";
import emote_twentyFour from "../../images/portfolio/Emotes/emote-24.webp";
import emote_twentyFive from "../../images/portfolio/Emotes/emote-25.webp";
import emote_twentySix from "../../images/portfolio/Emotes/emote-26.webp";
import emote_twentySeven from "../../images/portfolio/Emotes/emote-27.webp";
import emote_twentyEight from "../../images/portfolio/Emotes/emote-28.webp";
import emote_twentyNine from "../../images/portfolio/Emotes/emote-29.webp";

//Fanart
import fanart_one from "../../images/portfolio/Fan Art/Fansart-1.webp";
import fanart_two from "../../images/portfolio/Fan Art/Fansart-2.webp";
import fanart_three from "../../images/portfolio/Fan Art/Fansart-3.webp";
import fanart_four from "../../images/portfolio/Fan Art/Fansart-4.webp";
import fanart_five from "../../images/portfolio/Fan Art/Fansart-5.webp";
import fanart_six from "../../images/portfolio/Fan Art/Fansart-6.webp";
import fanart_seven from "../../images/portfolio/Fan Art/Fansart-7.webp";
import fanart_eight from "../../images/portfolio/Fan Art/Fansart-8.webp";

// Intro Outro
import intro from "../../images/portfolio/Intro Outro/Intro.mp4";
import outro from "../../images/portfolio/Intro Outro/Outro.mp4";

// Logo
import logo_one from "../../images/portfolio/Logo/logo-1.webp";
import logo_two from "../../images/portfolio/Logo/logo-2.webp";
import logo_three from "../../images/portfolio/Logo/logo-3.webp";

// Overlay
import overlay_one from "../../images/portfolio/Overlay/0666e559-78b6-4021-a576-be5f3c55167f.webp";
import overlay_two from "../../images/portfolio/Overlay/d24bbfa2-3111-4229-ba8b-eece5e8df1ad.mp4";
import overlay_three from "../../images/portfolio/Overlay/f405a9bc-8c45-4da3-9b55-8c97d7846611.mp4";
import overlay_four from "../../images/portfolio/Overlay/facc1ca8-1d0c-4c0e-8f07-d1aaff0a518d.mp4";
import overlay_five from "../../images/portfolio/Overlay/Overlay.mp4";

// Sketches
import sketch_one from "../../images/portfolio/Sketches/Sketch-1.webp";
import sketch_two from "../../images/portfolio/Sketches/Sketch-2.webp";
import sketch_three from "../../images/portfolio/Sketches/Sketch-3.webp";
import sketch_four from "../../images/portfolio/Sketches/Sketch-4.webp";
import sketch_five from "../../images/portfolio/Sketches/Sketch-5.webp";

// Websites
import website_one from "../../images/portfolio/Websites/Website-1.jpg";
import website_two from "../../images/portfolio/Websites/Website-2.jpg";
import website_three from "../../images/portfolio/Websites/Website-3.jpg";
import website_four from "../../images/portfolio/Websites/Website-4.jpg";

// Extra
import extra_one from "../../images/portfolio/Extra/4c722a6c-aaba-4f7e-b99a-0af746ba9a14.webp";
import extra_two from "../../images/portfolio/Extra/9078a25c-a773-4fe4-b0c1-1083c7577579.webp";
import extra_three from "../../images/portfolio/Extra/Alerts.mp4";
// Portfolio Imports End

const Index = () => {
  const [category, setCategory] = useState("Model2D");

  function changeCategory(value) {
    setCategory(value);
  }
  const categories = {
    Model2D: [
      model2d_one,
      model2d_two,
      model2d_three,
      model2d_four,
      model2d_five,
    ],
    Model3D: [model3d_one, model3d_two],
    ArtScenes: [artscenes_one, artscenes_two, artscenes_three, artscenes_four],
    Badges: [badges_one, badges_two, badges_three],
    Emotes: [
      emote_one,
      emote_two,
      emote_three,
      emote_four,
      emote_five,
      emote_six,
      emote_seven,
      emote_eight,
      emote_nine,
      emote_ten,
      emote_eleven,
      emote_twelve,
      emote_thirteen,
      emote_fourteen,
      emote_fifteen,
      emote_sixteen,
      emote_seventeen,
      emote_eighteen,
      emote_nineteen,
      emote_twenty,
      emote_twentyOne,
      emote_twentyTwo,
      emote_twentyThree,
      emote_twentyFour,
      emote_twentyFive,
      emote_twentySix,
      emote_twentySeven,
      emote_twentyEight,
      emote_twentyNine,
    ],
    Fanart: [
      fanart_one,
      fanart_two,
      fanart_three,
      fanart_four,
      fanart_five,
      fanart_six,
      fanart_seven,
      fanart_eight,
    ],
    IntroOutro: [intro, outro],
    Logo: [logo_one, logo_two, logo_three],
    Overlay: [
      overlay_one,
      overlay_two,
      overlay_three,
      overlay_four,
      overlay_five,
    ],
    Sketches: [sketch_one, sketch_two, sketch_three, sketch_four, sketch_five],
    Websites: [website_one, website_two, website_three, website_four],
    Extra: [extra_one, extra_two, extra_three],
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    categories[category].length
  );

  function changeCategory(value) {
    setCategory(value);
  }

  const numPages = Math.ceil(categories[category].length / itemsPerPage);

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
        <button onClick={() => changeCategory("Websites")}>Websites</button>
        <button onClick={() => changeCategory("Extra")}>Extra</button>
      </div>
      <div className={styles.stage}>
        <div className={styles.gallery}>
          {categories[category].slice(startIndex, endIndex).map((item, id) =>
            item.endsWith(".mp4") ? (
              <video
                autoPlay
                controls
                className={styles.item}
                key={id}
                loading="lazy"
                loop
              >
                <source src={item} type="video/mp4" />
              </video>
            ) : (
              <div className={styles.item} key={id}>
                {category == "Websites" ? (
                  <div className={styles.website}>
                    <img src={item} alt="" loading="lazy" />
                  </div>
                ) : (
                  <img src={item} alt="" loading="lazy" />
                )}
              </div>
            )
          )}
        </div>
      </div>
      {numPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.toggle}
          >
            <MdArrowLeft />
          </button>
          {Array.from(
            { length: Math.ceil(categories[category].length / itemsPerPage) },
            (_, i) => i + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= categories[category].length}
            className={styles.toggle}
          >
            <MdArrowRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Index;
