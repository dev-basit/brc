"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import socialStyles from "../../components/home/contact-us/contact-us.module.css";
import { ENUMS, ICONS } from "@/utils";

export const Footer = () => {
  const currentPath = usePathname();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerLogoContainer}>
          <Image src={ICONS.LOGO} width={150} height={100} alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet neque tortor. </p>
          <div className={socialStyles.socialsContainer}>
            {ENUMS.SOCIAL_ICONS.map((item, index) => (
              <Image
                src={item.imageSrc}
                width={40}
                height={40}
                alt="icon"
                key={index}
                className={`${socialStyles.socialIcon} ${item.active ? socialStyles.active : ""}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.footerNavListContainer}>
          <h3>Quick Links</h3>
          <ul>
            {ENUMS.NAVBAR_ITEMS.map(({ name, link }) => (
              <Link key={name} href={link}>
                <li
                  className={`${styles.footerNavList} ${
                    link === currentPath ? styles.footerNavListActive : ""
                  }`}
                >
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className={styles.contactUsContainer}>
          <h3>Contact Us</h3>
          {ENUMS.CONTACT_DETAILS.map((item, index) => (
            <div className={socialStyles.infoItem} key={index}>
              <Image src={item.imageSrc} width={15} height={15} alt="open/close" />
              <span className={socialStyles.text}>{item.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.newsLetterContainer}>
          <div>
            <h3>NEWSLETTER</h3>
            <input placeholder="Enter your email" />
          </div>
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};
