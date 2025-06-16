import { ICONS } from "@/utils";
import styles from "./track-order.module.css";
import commonStyles from "../../../app/common.module.css";
import Image from "next/image";
// import { FaPrint, FaSearch, FaTruck, FaClock, FaBox } from "react-icons/fa";
// import { MdOutlineReceiptLong } from "react-icons/md";

const trackingId = "MIY123456789";
const status = "Out For Delivery";
const steps = [
  { label: "Order Received", icon: ICONS.CIRCLE_MINUS, active: true },
  { label: "Order Scheduled", icon: ICONS.CIRCLE_MINUS, active: true },
  { label: "Out for Delivery", icon: ICONS.CIRCLE_MINUS, active: false },
  { label: "Delivered", icon: ICONS.CIRCLE_MINUS, active: false },
];

export const TrackOrder = () => {
  return (
    <div className={styles.wrapper} data-aos="zoom-in-up">
      <h4>Enter Your Tracking ID</h4>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <Image src={ICONS.SEARCH} width={20} height={20} alt="search" />
          <input placeholder={trackingId} />
        </div>
        <button className={styles.searchButton}>Track Now</button>
      </div>

      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <h2>Tracking ID :</h2>
            <h1>{trackingId}</h1>
          </div>
          <div className={styles.headerItem}>
            <h2>Status :</h2> <h1>{status}</h1>
          </div>
        </div>

        {/* <div className={styles.stepper}>
          {steps.map((step, idx) => (
            <div key={idx} className={`${styles.step} ${step.active ? styles.active : ""}`}>
              <div className={styles.icon}>{step.icon}</div>
              <p>{step.label}</p>
              {idx < steps.length - 1 && <div className={styles.line} />}
            </div>
          ))}
        </div> */}

        <div className={styles.details}>
          <div className={styles.print}>{/* <FaPrint /> <span>Print Details</span> */}</div>
          <div className={styles.orderInfo}>
            <p className={styles.orderInfoText}>
              <strong>Tracking ID:</strong> {trackingId}
            </p>
            <p className={styles.orderInfoText}>
              <strong>Current Location:</strong> Riyadh Distribution Hub
            </p>
            <p className={styles.orderInfoText}>
              <strong>Courier Contact:</strong> +966-XXX-XXXX
            </p>
            <p className={styles.orderInfoText}>
              <strong>Estimated Delivery:</strong> June 6, 2025
            </p>
            <p className={styles.orderInfoText}>
              <strong>Last Updated:</strong> 2 hours ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
