import Image from "next/image";
import styles from "./contact-us.module.css";
import commonStyles from "../../../app/common.module.css";
import { ICONS } from "@/utils";

const contactDetails = [
  {
    imageSrc: ICONS.EMAIL,
    text: "hello@website.com",
  },
  {
    imageSrc: ICONS.LOCATION,
    text: (
      <>
        Riverside Building, County Hall,
        <br />
        London SE1 7PB, United Kingdom
      </>
    ),
  },
  {
    imageSrc: ICONS.CALL,
    text: "+02 5421234560",
  },
];

const socialIcons = [
  { imageSrc: ICONS.YOUTUBE, active: true },
  { imageSrc: ICONS.TWITTER, active: false },
  { imageSrc: ICONS.INSTAGRAM, active: false },
  { imageSrc: ICONS.FACEBOOK, active: false },
];

export const ContactUs = () => {
  return (
    <div className={styles.contactUs} data-aos="zoom-up">
      <div className={styles.headings}>
        <h1>Fill the form to contact us</h1>
        <p className={commonStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur
          nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.
          Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus.
        </p>
      </div>
      <div className={styles.contactUsContainer}>
        <div className={styles.leftContainer} data-aos="fade-right">
          <div className={styles.contactDetails}>
            <h1>CONTACT INFORMATION</h1>
            <p>Sed facilisis eleifend quam, non efficitur nisi mattis quis</p>
            {contactDetails.map((item, index) => (
              <div className={styles.infoItem} key={index}>
                <Image src={item.imageSrc} width={15} height={15} alt="open/close" />
                <span className={styles.text}>{item.text}</span>
              </div>
            ))}

            <div className={styles.socialsContainer}>
              {socialIcons.map((item, index) => (
                <Image
                  src={item.imageSrc}
                  width={40}
                  height={40}
                  alt="icon"
                  key={index}
                  className={`${styles.socialIcon} ${item.active ? styles.active : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightContainer} data-aos="fade-left">
          {/* <p className={commonStyles.sectionName}>CONTACT US</p> */}
          {/* <br /> */}
          <div className={commonStyles.flexColumn}>
            <div className={styles.formDualItems}>
              <div className={styles.contactUsFormItem}>
                <p className={commonStyles.formItemLabel}>Full Name</p>
                <input className={commonStyles.formInput} placeholder="Enter Full Name" />
              </div>
              {/* <div className={styles.contactUsFormItem}>
                <p className={commonStyles.formItemLabel}>Last Name</p>
                <input className={commonStyles.formInput} placeholder="Enter Last Name" />
              </div> */}
            </div>
            <div className={styles.contactUsFormItem}>
              <p className={commonStyles.formItemLabel}>Email</p>
              <input className={commonStyles.formInput} placeholder="Enter Email" />
            </div>
            {/* <div className={styles.contactUsFormItem}>
              <p className={commonStyles.formItemLabel}>Phone Number</p>
              <input className={commonStyles.formInput} placeholder="+1(555) 000-000" />
            </div> */}
            <div className={styles.contactUsFormItem}>
              <p className={commonStyles.formItemLabel}>Message</p>
              <textarea className={commonStyles.formTextArea} placeholder="Leave us a message" />
            </div>

            {/* <div className={commonStyles.flexStartCenter}>
              <input className={commonStyles.formInput} type="checkbox" placeholder="Enter Email" />
              <p>You agree to our friendly privacy policy.</p>
            </div> */}

            <button className={commonStyles.buttonPrimary}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
