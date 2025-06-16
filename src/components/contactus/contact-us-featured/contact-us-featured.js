import styles from "./contact-us-featured.module.css";
import commonStyles from "../../../app/common.module.css";
import Image from "next/image";
import { ICONS } from "@/utils";

export const ContactUsFeatured = () => {
  return (
    <div className={styles.contactUsContainer} data-aos="fade-in">
      <div className={styles.headings}>
        <p className={commonStyles.sectionName}>CONTACT US</p>
        <h2>We&apos;d love to hear from you</h2>
        <p>We have offices and teams all around the world.</p>
      </div>

      <Image src={ICONS.MAP} alt="map" className={styles.map} />
    </div>
  );
};
