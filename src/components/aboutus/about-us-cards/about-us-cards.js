import { ENUMS } from "@/utils";
import styles from "./about-us-cards.module.css";
import Image from "next/image";

export const AboutUsCards = () => {
  return (
    <section className={styles.featuresContainer}>
      <div className={styles.cardsContainer}>
        {ENUMS.ABOUTUS_CARDS.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.iconContainer}>
              <Image src={feature.icon} alt={feature.title} className={styles.iconImage} />
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
