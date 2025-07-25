import Image from "next/image";
import commonStyles from "@/app/common.module.css";
import styles from "./choose-us.module.css";
import { ENUMS, ICONS } from "@/utils";

export const ChooseUs = () => {
  return (
    <div className={styles.chooseUs}>
      <p className={commonStyles.textDashed} style={{ textAlign: "center", paddingTop: "3rem" }}>
        Why BRC?
      </p>
      <h1 className={styles.chooseUsHeading}>Why choose Us? </h1>
      <div className={styles.chooseUsContainer} data-aos="zoom-in">
        <div className={styles.leftContainer}>
          <p className={styles.chooseUsText}>
            We&apos;re not just another agency, we&apos;re your digital growth partners. With years of
            industry experience and a passion for innovation.
          </p>
          <br />
          <br />
          {ENUMS.CHOOSE_US_REASONS.map((item, index) => (
            <div key={index} className={styles.chooseUsItem}>
              <Image src={ICONS.TICK} alt="tick" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <div className={styles.centerContainer}>
          <Image src={ICONS.CHOOSE_US_GROUP} alt="continer" fill style={{ objectFit: "contain" }} />
        </div>
        <div className={styles.rightContainer}>
          {ENUMS.ABOUT_US_FIGURES.map((item) => (
            <div className={styles.chooseUsFigureItem} key={item.label}>
              <div>{item.value}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
