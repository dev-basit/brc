import Image from "next/image";
import styles from "./about-us.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS, ICONS } from "@/utils";

export const AboutUs = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.aboutUsContainer} data-aos="fade-in">
        <div className={styles.leftContainer}>
          <p className={commonStyles.sectionName}>ABOUT US</p>
          <h1>
            Partners In Your <span>Success</span>
          </h1>
          <br />
          <p className={commonStyles.text}>
            Lorem ipsum dolor sit amet consectetur. Congue nunc molestie accumsan ipsum odio eu eget cras.
            Massa sit risus quam magna et laoreet ullamcorper massa.
          </p>
          <br />
          <br />
          {Array.from({ length: 4 }).map((item, index) => (
            <div key={index} className={styles.aboutUsItem}>
              <Image src={ICONS.TICK_ORANGE} alt="tick" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          ))}
        </div>
        <div className={styles.centerContainer}>
          {ENUMS.ABOUT_US_FIGURES.map((item) => (
            <div className={styles.aboutUsFigureItem} key={item.label}>
              <div>{item.value}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Image src={ICONS.CONTAINER} alt="continer" />
      </div>
    </div>
  );
};
