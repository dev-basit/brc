import styles from "./featured.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS } from "@/utils";

export const Featured = () => {
  return (
    <main className={styles.featuredContainer} data-aos="fade-up">
      <div className={styles.featuredContentContainer}>
        <div className={styles.featuredLeft} data-aos="fade-up">
          <p className={styles.featuredText}>WE ARE BEST COURIER COMPANY</p>
          <h1>Reliable Outsourcing</h1>
          <h1> Solutions Across Saudi Arabia</h1>
          <p className={styles.featuredText}>
            From delivery to digital, we help businesses scale efficiently with tailored services.
          </p>

          <div className={styles.featuredFigureContaier} data-aos="fade-right">
            {ENUMS.PORTFOLIO_FIGURES.map((item) => (
              <div key={item.label} className={styles.featuredFigureItem}>
                <h2> {item.value}</h2>
                <p>{item.label}</p>
              </div>
            ))}
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
