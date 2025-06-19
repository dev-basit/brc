import styles from "./services-featured.module.css";
import commonStyles from "../../../app/common.module.css";
import Image from "next/image";
import { ICONS } from "@/utils";

export const ServicesFeatured = () => {
  return (
    <main className={styles.servicesFeaturedContainer} data-aos="fade-up">
      {/* <div className={styles.holesBackground}></div> */}
      <div className={styles.servicesFeaturedContentContainer}>
        <div className={styles.servicesFeaturedLeft}>
          <h1>We can move you everywhere. </h1>
          <h1>Easy & Fast</h1>
          <p>From delivery to digital, we help businesses scale efficiently with tailored services.</p>
          <button className={commonStyles.buttonPrimary}>Get a Free Quote</button>
        </div>
        <div className={styles.servicesFeaturedImage}>
          <Image src={ICONS.TRUCK2} alt="featured" />
        </div>
      </div>
    </main>
  );
};
