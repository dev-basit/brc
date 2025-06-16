import Image from "next/image";
import styles from "./service-item.module.css";
import commonStyles from "../../../app/common.module.css";
import { ICONS } from "@/utils";

export const ServiceItem = ({
  heading = "Focused",
  details = "Lorem ipsum dolor sit amet consectetur. In diam nunc senectus tortor a. Eu eget suspendisse leo sed condimentum. Euismod nam tincidunt est cras egestas at scelerisque. Penatibus adipiscing augue arcu quam est pulvinar lacinia. ",
  imageSrc = ICONS.CONTAINER3,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`${styles.container} ${imagePosition === "left" ? styles.reverse : ""}`}
      data-aos="fade-in"
    >
      <div className={styles.leftContainer} data-aos="zoom-in">
        <h1>{heading}</h1>
        <br />
        <p className={commonStyles.text}>{details}</p>
      </div>
      <div className={styles.rightContainer}>
        <Image src={imageSrc} alt="container" />
      </div>
    </div>
  );
};
