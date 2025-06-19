import Image from "next/image";
import styles from "./vision.module.css";
import { ENUMS, ICONS } from "@/utils";

export const Vision = () => {
  return (
    <section className={styles.visionContainer} data-aos="zoom-in-up">
      <div className={styles.visionContent}>
        <p className={styles.bartitle}>— VISION —</p>
        <h2 className={styles.mainTitle}>OUR VISION</h2>
        <p className={styles.description}>
          Our vision is to become the leading provider of outsource services to market, leveraging
          cutting-edge technology and operational excellence to consistently deliver exceptional value to our
          customers. We aim to create a seamless and hassle-free experience for our clients, enabling them to
          focus on their core business while we take care of their outsource needs.
        </p>

        <div className={styles.contentContainer}>
          <div className={styles.visionImageContainer}>
            <Image src={ICONS.VISION} alt="Our Vision" className={styles.visionImage} />
          </div>

          <div className={styles.visionPointsContainer}>
            {ENUMS.VISION_FEATURES.map((point) => (
              <div key={point.id} className={styles.visionPointCard} data-aos="fade-left">
                <div className={styles.visionPointIconContainer}>
                  <Image src={point.icon} alt="Icon" className={styles.visionPointIcon} />
                </div>
                <p className={styles.visionPointText}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
