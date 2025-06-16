import Image from "next/image";
import styles from "./footer.module.css";
import { ENUMS, ICONS } from "@/utils";
import { FooterNavbarItems } from "./footer-nav-items";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerLogoContainer}>
          <Image src={ICONS.LOGO_WHITE} width={150} height={100} alt="logo" />

          <div className={styles.subscribeContainer}>
            <div>
              <h3>Stay up to date</h3>
              <input placeholder="Enter your email" />
            </div>
            <button>Subscribe</button>
          </div>
        </div>

        <FooterNavbarItems />

        <hr />

        <div className={styles.footerLogoContainer}>
          <p>© 2025 Miyar Alinjaz. All rights reserved.</p>
          <div className={styles.footerOtherItems}>
            <ul>
              {ENUMS.FOOTER_OTHER_ITEMS.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
