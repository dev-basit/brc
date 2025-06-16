"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ENUMS, ICONS } from "@/utils";
import styles from "./navbar.module.css";

export const NavbarItems = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <section>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        <Image src={ICONS.MENU} width={40} height={40} alt="menu" />
      </div>

      <ul className={`${styles.navbarItems} ${isOpen ? styles.navbarItemsMobile : ""}`}>
        {ENUMS.NAVBAR_ITEMS.map(({ name, link }) => (
          <Link key={name} href={link}>
            <li
              className={`${styles.navList} ${link === currentPath ? styles.navListActive : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
