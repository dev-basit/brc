import styles from "./featured.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS, ICONS } from "@/utils";
import { Hero } from "@/components/common/hero/hero";
import Image from "next/image";

export const Featured = () => {
  return (
    <main className={styles.featuredContainer}>
      <Hero />

      <div className={styles.featuredContentContainer}>
        <div className={styles.featuredLeft} data-aos="fade-up">
          <p className={styles.featuredText}>WE ARE BEST COURIER COMPANY</p>
          <h1>Reliable Outsourcing</h1>
          <h1> Solutions Across Saudi Arabia</h1>
          <p className={styles.featuredText}>
            From delivery to digital, we help businesses scale efficiently with tailored services.
          </p>

          <div className={styles.featuredFigureContaier} data-aos="fade-right">
            <Image src={ICONS.FEATURE_PERSON_SM} alt="person" className={styles.featurePerson} />
            <div className={styles.featuredFigureItemsContaier}>
              {ENUMS.PORTFOLIO_FIGURES.map((item) => (
                <div key={item.label} className={styles.featuredFigureItem}>
                  <h2> {item.value}</h2>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.featureActionContainer}>
            <button className={commonStyles.buttonPrimary}>Get a Free Quote</button>
            <p style={{ marginTop: "2rem" }}>Explore Our Services</p>
          </div>
        </div>
      </div>
    </main>
  );
};
