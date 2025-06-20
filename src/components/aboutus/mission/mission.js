import Image from "next/image";
import styles from "./mission.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS, ICONS } from "@/utils";

export const Mission = () => {
  return (
    <div className={styles.missionContainer}>
      <div className={styles.leftContainer} data-aos="zoom-in-up">
        <Image src={ICONS.TWO_MEN_MEETING} alt="continer" />
      </div>

      <div className={styles.rightContainer} data-aos="zoom-in-up">
        <p className={commonStyles.textDashed}>MISSION</p>
        <h1>OUR MISSION</h1>
        <br />
        <p className={commonStyles.text}>
          Our mission is to provide fast, reliable, and cost-effective outsource services to our clients,
          enabling them to meet their customers&apos; expectations and enhance their own operational
          efficiency.
        </p>
      </div>
    </div>
  );
};
