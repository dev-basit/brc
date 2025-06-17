import { ServicesFeatured } from "@/components/services/services-featured/services-featured";
import { ServiceItem } from "@/components/services/service-item/service-item";
import { ENUMS } from "@/utils";
import styles from "../../components/services/service-item/service-item.module.css";

export default function Services() {
  return (
    <div className={styles.servicesItemsContainer}>
      <ServicesFeatured />
      {ENUMS.SERVICES_ITEMS.map((service, index) => (
        <ServiceItem
          key={index}
          id={service.id}
          heading={service.heading}
          imageSrc={service.imageSrc}
          imagePosition={service.imagePosition}
          features={service.features}
        />
      ))}
      <br />
      <br />
      <br />
    </div>
  );
}
