import styles from "../../home/clients/clients.module.css";
import servicesStyles from "./tracking-featured.module.css";
import commonStyles from "../../../app/common.module.css";

export const TrackingFeatured = () => {
  return (
    <div className={styles.clientsContainer} data-aos="zoom-up">
      <div className={servicesStyles.clientsContentContainer}>
        <div className={styles.headings}>
          <p className={commonStyles.sectionName}>TRACKING</p>
          <h1>Track Your Order</h1>
          <p>Stay updated in real time. Enter your tracking number below to view your shipment status.</p>
        </div>
      </div>
    </div>
  );
};
