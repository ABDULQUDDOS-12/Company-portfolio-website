import React from "react";
import styles from "./members.module.css";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import members from "./members.json";

const Members = () => {
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
