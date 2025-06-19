import { ServicesFeatured } from "@/components/services/services-featured/services-featured";
import { ServiceItem } from "@/components/services/service-item/service-item";
import { ENUMS } from "@/utils";
import styles from "../../components/services/service-item/service-item.module.css";
import { ServicesCard } from "@/components/services/services-card/services-card";

export default function Services() {
  return (
    <div className={styles.servicesItemsContainer}>
      <ServicesFeatured />
      <ServicesCard />
      {ENUMS.SERVICES_ITEMS.map((service, index) => (
        <ServiceItem
          key={service.id}
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

//
