import styles from "./about-us-featured.module.css";
import commonStyles from "../../../app/common.module.css";
import Image from "next/image";
import { ICONS } from "@/utils";

export const AboutUsFeatured = () => {
  return (
    <main className={styles.aboutUsFeaturedContainer} data-aos="zoom-in-up">
      <div className={styles.aboutUsFeaturedContentContainer}>
        <div className={styles.aboutUsFeaturedLeft}>
          <h1>We can move you everywhere. </h1>
          <h1>Fast & Easily</h1>
          <p>From delivery to digital, we help businesses scale efficiently with tailored services.</p>
          <button className={commonStyles.buttonPrimary}>Get a Free Quote</button>
        </div>
      </div>
      <div className={styles.aboutUsFeaturedImage}>
        <Image src={ICONS.DELIVERY_MAN_BOX} alt="featured" />
      </div>
    </main>
  );
};
