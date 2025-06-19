import Image from "next/image";
import styles from "./service-item.module.css";
import commonStyles from "../../../app/common.module.css";
import { ICONS } from "@/utils";

export const ServiceItem = ({
  id = 1,
  heading = "Focused",
  details = "Lorem ipsum dolor sit amet consectetur. In diam nunc senectus tortor a. Eu eget suspendisse leo sed condimentum. Euismod nam tincidunt est cras egestas at scelerisque. Penatibus adipiscing augue arcu quam est pulvinar lacinia. ",
  imageSrc = ICONS.CONTAINER3,
  imagePosition = "right",
  features = [],
}) => {
  return (
    <div
      className={`${styles.serviceItem} ${imagePosition === "left" ? styles.reverse : ""}`}
      data-aos="fade-in"
    >
      <div className={styles.leftContainer} data-aos="zoom-in">
        <h1>
          {id}. {heading}
        </h1>
        <br />
        <p className={commonStyles.text}>{details}</p>
        <ul>
          {features.map((item, index) => (
            <li key={index}>{item.details}</li>
          ))}
        </ul>
      </div>
      <div className={styles.rightContainer}>
        <Image src={imageSrc} alt="container" />
      </div>
    </div>
  );
};
