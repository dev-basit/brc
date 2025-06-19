import Image from "next/image";
import styles from "./values.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS } from "@/utils";

export const Values = () => {
  return (
    <div className={styles.mission}>
      <div className={styles.missionContainer}>
        <div className={styles.rightContainer}>
          <div className={styles.rightContainerContent}>
            <h1>our core values</h1>
            <br />
            <p className={commonStyles.text}>
              With these core values we plan to successfully achieve our mission
            </p>
          </div>
        </div>
        <div className={styles.leftContainer}>
          <div className={styles.cardsContainer}>
            {ENUMS.ABOUTUS_VALUES.map((feature) => (
              <div key={feature.id} className={styles.cardItem}>
                <div className={styles.iconContainer}>
                  <Image src={feature.icon} alt={feature.title} />
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
