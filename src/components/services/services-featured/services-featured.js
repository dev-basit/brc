import styles from "../../home/clients/clients.module.css";
import servicesStyles from "./services-featured.module.css";
import commonStyles from "../../../app/common.module.css";

export const ServicesFeatured = () => {
  return (
    <div className={styles.clientsContainer} data-aos="zoom-up">
      <div className={servicesStyles.clientsContentContainer}>
        <div className={styles.headings}>
          <p className={commonStyles.sectionName}>SERVICES</p>
          <h1>Our Quality Services</h1>
          <p>We offer the best logistics and tracking for ambitious businesses.</p>
        </div>
      </div>
    </div>
  );
};
