import React from "react";
import styles from "./ready.module.css";
import commonStyles from "../../../app/common.module.css";
import Image from "next/image";
import { ICONS } from "@/utils";

export const Ready = () => {
  return (
    <section className={styles.bannerSection} data-aos="zoom-in-up">
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>READY TO REVOLUTIONIZE YOUR LOGISTICS OPERATIONS?</h2>
        <p className={styles.description}>
          Join countless other businesses that have streamlined their logistics with our cutting edge
          solutions
        </p>
        <button className={`${commonStyles.buttonPrimary} ${styles.quoteButton}`}>GET A QUOTE</button>
      </div>

      <div className={styles.imageContainer}>
        <Image src={ICONS.TRUCK_LARGE} alt="truck" className={styles.truckImage} />
      </div>
    </section>
  );
};
