import styles from "./contact-us-featured.module.css";
import commonStyles from "@/app/common.module.css";

export const ContactUsFeatured = () => {
  return (
    <div className={styles.contactUsContainer} data-aos="fade-in">
      <div className={styles.headings}>
        <p className={commonStyles.textDashedWhite} style={{ textAlign: "center" }}>
          Contact us
        </p>
        <h1>Get in Touch</h1>
        <p>Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can reach us</p>
      </div>
    </div>
  );
};
