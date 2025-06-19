import Image from "next/image";
import Link from "next/link";
import styles from "./services-card.module.css";
import { ICONS } from "@/utils";

const services = [
  {
    title: "Outsource Courier",
    description:
      "Our couriers are highly trained and professional, and we offer courier services in all major cities of Saudi Arabia.",
  },
  {
    title: "Food Delivery Riders",
    description:
      "Our dedicated riders ensure prompt, efficient, and reliable food delivery to delight your customers every time.",
  },
  {
    title: "Truck Between Cities",
    description:
      "We offer efficient and reliable line haul truck services, ensuring timely long-distance delivery that exceeds client expectations.",
  },
  {
    title: "IT Sourcing",
    description:
      "We provide cost effective, flexible IT outsourcing to help businesses optimize operations and focus on growth.",
  },
  {
    title: "OutSource Manpower",
    description:
      "We offer reliable, efficient outsourced staffing solutions to help businesses streamline operations and reduce costs.",
  },
];

export const ServicesCard = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className={styles.servicesContainer}>
        <h1>Efficient and Reliable Shipping with FastGo </h1>
        <br />
        <br />
        <br />
        <div className={styles.servicesItemsContainer} data-aos="fade-up">
          {services.map((service, index) => (
            <div className={styles.card} key={index} data-aos="fade-right">
              <div className={styles.iconWrapper}>
                <Image src={ICONS.CLOCK} alt="Icon" width={30} height={30} />
              </div>
              <h3 className={styles.title}>
                <span>{service.title}</span>
              </h3>
              <p className={styles.description}>{service.description}</p>
              <Link href="/" className={styles.link}>
                Learn More →
              </Link>
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
