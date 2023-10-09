import React from "react";
import styles from "./members.module.css";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

const Members = () => {
  return (
    <section className={styles.members}>
      <h1>Our Top Agents</h1>
      <div className={styles.agents}>
        <div className="item">
          <img src="" alt="" className={styles.avatar} />
          <h3 className={styles.name}>Agent Name</h3>
          <div className={styles.socials}>
            <span>
              <FaDiscord />
            </span>
            <span>
              <FaXTwitter />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
