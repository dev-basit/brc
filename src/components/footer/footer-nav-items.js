"use client";
import { usePathname } from "next/navigation";
import { ENUMS } from "@/utils";
import styles from "./footer.module.css";
import Link from "next/link";

export const FooterNavbarItems = () => {
  const currentPath = usePathname();

  return (
    <section className={styles.footerNavListContainer}>
      <ul>
        {ENUMS.NAVBAR_ITEMS.map(({ name, link }) => (
          <Link key={name} href={link}>
            <li
              className={`${styles.footerNavList} ${link === currentPath ? styles.footerNavListActive : ""}`}
            >
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
