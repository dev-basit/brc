import Image from "next/image";
import styles from "./services.module.css";
import commonStyles from "../../../app/common.module.css";
import { ENUMS } from "@/utils";

export const Services = () => {
  return (
    <div className={styles.servicesContainer} data-aos="zoom-in">
      <div className={styles.headings}>
        <p className={commonStyles.sectionName}>SERVICES</p>
        <h1>
          Our Quality <span>Services</span>
        </h1>
        <p className={commonStyles.text}>
          We offer the best logistics and tracking for ambitious businesses.
        </p>
      </div>
      <div className={styles.serviceTypesContainer}>
        {ENUMS.SERVICES.map((service) => (
          <div className={styles.serviceType} key={service.name} data-aos="zoom-in-up">
            <div className={styles.serviceIcon}>
              <Image
                width={30}
                height={30}
                src={service.icon}
                alt="service"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              />
            </div>
            <p className={styles.serviceCategoryName}>{service.name}</p>
            <p className={styles.serviceCategoryDescription}>
              Lorem ipsum dolor sit amet consectetur. Ut sit integer maecenas eu.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
