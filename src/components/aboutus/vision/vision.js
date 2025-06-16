import Image from "next/image";
import styles from "./vision.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS, ICONS } from "@/utils";

export const Vision = () => {
  return (
    <div style={{ position: "relative", marginTop: "26rem", marginBottom: "20rem" }} data-aos="zoom-in">
      <div className={styles.visionContainer}>
        <div className={styles.rightContainer}>
          <Image src={ICONS.CONTAINER4} alt="continer" />
        </div>
        <div className={styles.leftContainer}>
          <p className={commonStyles.sectionName}>OUR VISION</p>
          <br />
          <h1>
            Shaping the Future of<span> Transport</span>
          </h1>
          <br />
          <p className={commonStyles.text}>
            To be a leading force in the transport and logistics industry, recognized for our excellence,
            sustainability, and commitment to driving progress for communities and businesses across the
            region and beyond.
          </p>
          <br />
          <br />
          {ENUMS.VISION.map((item, index) => (
            <div key={index} className={styles.visionItem}>
              <Image src={ICONS.TICK_ORANGE} alt="tick" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
