import Image from "next/image";
import styles from "./contact-us.module.css";
import commonStyles from "../../../app/common.module.css";
import { ICONS } from "@/utils";

export const ContactUs = () => {
  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.leftContainer}>
        <Image src={ICONS.CONTAINER2} alt="continer" />
      </div>

      <div className={styles.rightContainer} data-aos="fade-up">
        <p className={commonStyles.sectionName}>CONTACT US</p>
        <h1>
          Let&apos;s <span>hear</span> from you
        </h1>
        <br />
        <p className={commonStyles.text}>Our friendly team would love to hear from you. </p>
        <br />
        <div className={commonStyles.flexColumn}>
          <div className={styles.formDualItems}>
            <div className={styles.contactUsFormItem}>
              <p className={commonStyles.formItemLabel}>First Name</p>
              <input className={commonStyles.formInput} placeholder="Enter First Name" />
            </div>
            <div className={styles.contactUsFormItem}>
              <p className={commonStyles.formItemLabel}>Last Name</p>
              <input className={commonStyles.formInput} placeholder="Enter Last Name" />
            </div>
          </div>
          <div className={styles.contactUsFormItem}>
            <p className={commonStyles.formItemLabel}>Email</p>
            <input className={commonStyles.formInput} placeholder="Enter Email" />
          </div>
          <div className={styles.contactUsFormItem}>
            <p className={commonStyles.formItemLabel}>Phone Number</p>
            <input className={commonStyles.formInput} placeholder="+1(555) 000-000" />
          </div>
          <div className={styles.contactUsFormItem}>
            <p className={commonStyles.formItemLabel}>Message</p>
            <textarea className={commonStyles.formTextArea} placeholder="Leave us a message" />
          </div>

          <div className={commonStyles.flexStartCenter}>
            <input className={commonStyles.formInput} type="checkbox" placeholder="Enter Email" />
            <p>You agree to our friendly privacy policy.</p>
          </div>

          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};
