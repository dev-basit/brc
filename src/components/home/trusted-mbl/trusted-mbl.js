import Image from "next/image";
import styles from "./trusted-mbl.module.css";
import commonStyles from "../../../app/common.module.css";
import { ICONS } from "@/utils";

export const TrustedMbl = () => {
  return (
    <div className={styles.trustedContainer}>
      <div className={styles.companiesImageMbl} data-aos="fade-left">
        <Image src={ICONS.COMPANIES_GROUP} alt="continer" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
};
