import Image from "next/image";
import styles from "./questions.module.css";
import { ENUMS, ICONS } from "@/utils";
import { FAQS } from "@/components/aboutus/faqs/faqs";

export const Questions = () => {
  return (
    <div className={styles.question} data-aos="zoom-in">
      <div className={styles.questionContainer}>
        <div className={styles.leftContainer} data-aos="zoom-in">
          <h1 className={styles.questionHeading}>Have Any Questions? </h1>
          <p className={styles.questionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non
            efficitur nisi mattis quis.
          </p>
          <br />
          <br />
          <Image src={ICONS.LAPTOP_BOX} alt="continer" />
        </div>
        <div className={styles.rightContainer} data-aos="zoom-in">
          <FAQS />
        </div>
      </div>
    </div>
  );
};
