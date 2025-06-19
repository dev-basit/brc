import Image from "next/image";
import styles from "./services.module.css";
import commonStyles from "@/app/common.module.css";
import { ENUMS, ICONS } from "@/utils";

export const Services = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesContent} data-aos="fade-in">
          <div className={styles.leftContainer} data-aos="fade-right">
            <p className={commonStyles.textDashed}>What We Do</p>
            <h1>Smart, Scalable Services to Power Your Business Operations </h1>
            <br />
            <p className={commonStyles.text}>
              We deliver reliable outsourcing solutions across logistics, technology, and staffing so you can
              focus on what matters most.
            </p>

            <br />
            <br />
            <button className={commonStyles.buttonPrimary}>Learn More</button>
          </div>
          <div className={styles.rightContainer} data-aos="fade-left">
            <Image src={ICONS.SERVICES_GROUP} alt="services" />
          </div>
        </div>
        <div className={styles.servicesItemsContainer} data-aos="fade-up">
          {ENUMS.SERVICES.map((item, index) => (
            <div className={styles.servicesItem} key={index}>
              <h2>
                <pre>0{item.id} </pre>
              </h2>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.boxShineImage} data-aos="fade-left">
        <Image src={ICONS.BOX_SHINE} alt="continer" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
};
