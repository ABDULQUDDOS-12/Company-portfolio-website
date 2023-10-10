import React from "react";
import styles from "./members.module.css";

import ameliGfx from "../../images/ameliGfx.jpg";
import bellaMorri from "../../images/bellaMorri.jpg";
import serafinaSara from "../../images/serafinaSara.png";
import caelia from "../../images/caelia.jpg";
import astoriaClairr from "../../images/astoriaClairr.jpg";
import lagerthaSmith from "../../images/lagerthaSmith.jpg";

import { FaXTwitter, FaDiscord } from "react-icons/fa6";

const Members = () => {
  const members = [
    {
      id: 1,
      avatar: ameliGfx,
      name: "Ameli Gfx",
      socials: {
        twitter: "https://x.com/ameliGfx",
        discord: "",
      },
    },
    {
      id: 2,
      avatar: bellaMorri,
      name: "Bella Morri",
      socials: {
        twitter: "https://twitter.com/bella_morri",
        discord: "",
      },
    },
    {
      id: 3,
      avatar: serafinaSara,
      name: "Serafina Sara",
      socials: {
        twitter: "https://twitter.com/serafinasara01",
        discord: "",
      },
    },
    {
      id: 4,
      avatar: caelia,
      name: "Caelia",
      socials: {
        twitter: "https://x.com/Caelia98",
        discord: "",
      },
    },
    {
      id: 5,
      avatar: astoriaClairr,
      name: "Astoria Clairr",
      socials: {
        twitter: "https://twitter.com/AstoriaClair",
        discord: "",
      },
    },
    {
      id: 6,
      avatar: lagerthaSmith,
      name: "Lagertha Smith",
      socials: {
        twitter: "https://twitter.com/LagerthaSmith",
        discord: "",
      },
    },
  ];
  return (
    <section className={styles.members}>
      <h1>Our Top Agents</h1>
      <div className={styles.agents} id="agents">
        {members.map((item) => (
          <div className={styles.item}>
            <img src={item.avatar} alt="" className={styles.avatar} />
            <h4 className={styles.name}>{item.name}</h4>
            <div className={styles.socials}>
              <span>
                <a href={item.socials.discord} target="__blank">
                  <FaDiscord />
                </a>
              </span>
              <span>
                <a href={item.socials.twitter} target="__blank">
                  <FaXTwitter />
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
