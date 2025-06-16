import styles from "../../home/clients/clients.module.css";
import clientsStyles from "./about-us-featured.module.css";
import commonStyles from "../../../app/common.module.css";

export const AboutUsFeatured = () => {
  return (
    <div className={styles.clientsContainer} data-aos="zoom-up">
      <div className={clientsStyles.clientsContentContainer}>
        <div className={styles.headings}>
          <p className={commonStyles.sectionName}>TESTIMONIAL</p>
          <h1>
            Our Happy <span>Clients</span>
          </h1>
          <p>Hear first-hand from our incredible community of customers.</p>
        </div>
      </div>
    </div>
  );
};
