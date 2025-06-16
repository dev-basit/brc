import Image from "next/image";
import styles from "./trusted.module.css";
import commonStyles from "../../../app/common.module.css";
import { ICONS } from "@/utils";

export const Trusted = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className={styles.trustedContainer}>
        <div className={styles.trustedContent} data-aos="fade-in">
          <div className={styles.leftContainer} data-aos="fade-right">
            <h1>Trusted by Top </h1>
            <h1>companies </h1>
            <br />
            <p className={commonStyles.textWhite}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non
              efficitur nisi mattis quis.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.companiesImage} data-aos="fade-left">
        <Image src={ICONS.COMPANIES_GROUP} alt="continer" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
};
