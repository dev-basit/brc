import Image from "next/image";
import styles from "./clients.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS, ICONS } from "@/utils";

export const Clients = () => {
  return (
    <div className={styles.clientsContainer} data-aos="zoom-in-up">
      <div className={styles.clientsContentContainer}>
        <div className={styles.headings}>
          <p className={commonStyles.sectionName}>TESTIMONIAL</p>
          <h1>
            Our Happy <span>Clients</span>
          </h1>
          <p>Hear first-hand from our incredible community of customers.</p>
        </div>
        <div className={styles.clientContainer}>
          {ENUMS.CLIENTS_REVIEWS.map((client) => (
            <div className={styles.clientItem} key={client.name} data-aos="zoom-in-up">
              <div className={styles.clientIconsContainer}>
                {Array.from({ length: 5 }).map((item, index) => (
                  <div className={styles.clientIcon} key={index}>
                    <Image
                      width={20}
                      height={20}
                      src={ICONS.STAR}
                      alt="client"
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    />
                  </div>
                ))}
              </div>
              <p className={styles.clientDescription}>{client.description}</p>
              <p className={styles.clientName}>{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
