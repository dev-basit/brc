import Image from "next/image";
import styles from "./contact-us.module.css";
import commonStyles from "../../../app/common.module.css";
import { ICONS } from "@/utils";

const contactDetails = [
  {
    imageSrc: ICONS.LOCATION,
    heading: "Location",
    text: (
      <>
        Grandstand 6th floor, Meydan Road, Nad Al Sheba, Dubai, UAE.
        <br />
        3A, 2nd Floor, Sector XX DHA Phase 3, Lahore.
      </>
    ),
  },
  { imageSrc: ICONS.ENVELOPE, heading: "Email Us", text: "contact@brc.com" },
  { imageSrc: ICONS.CALL, heading: "Phone", text: "+92-300-1225542" },
];

export const ContactUs = () => {
  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.leftContainer} data-aos="fade-right">
        <div className={styles.contactDetails}>
          <h1>Let&apos;s Talk To Us</h1>
          {contactDetails.map((item, index) => (
            <div className={styles.infoItem} key={index}>
              <Image src={item.imageSrc} width={30} height={30} alt="open/close" />
              <div>
                <h2>{item.heading}</h2>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightContainer} data-aos="fade-left">
        <div className={commonStyles.flexColumn}>
          <div className={styles.formDualItems}>
            <div className={styles.contactUsFormItem}>
              <p className={commonStyles.formItemLabelSecondary}>Full Name</p>
              <input className={styles.contactUsFormInput} placeholder="Enter Full Name" />
            </div>
          </div>
          <div className={styles.contactUsFormItem}>
            <p className={commonStyles.formItemLabelSecondary}>Email</p>
            <input className={styles.contactUsFormInput} placeholder="Enter Email" />
          </div>
          <div className={styles.contactUsFormItem}>
            <p className={commonStyles.formItemLabelSecondary}>Message</p>
            <textarea className={styles.contactUsTextArea} placeholder="Leave us a message" />
          </div>

          <button className={commonStyles.buttonPrimary}>Send</button>
        </div>
      </div>
    </div>
  );
};
