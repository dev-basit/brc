import styles from "./contact-us-featured.module.css";

export const ContactUsFeatured = () => {
  return (
    <div className={styles.contactUsContainer} data-aos="fade-in">
      <div className={styles.headings}>
        <h1>Get in Touch</h1>
        <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us</p>
      </div>
    </div>
  );
};
