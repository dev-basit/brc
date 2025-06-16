import styles from "./navbar.module.css";
import { NavbarItems } from "./navbar-items";
import { NavbarLogo } from "./navbar-logo";

export const Navbar = () => {
  return (
    <navbar className={styles.navbarContainer}>
      <section className={styles.navbarContent}>
        <NavbarLogo />
        <NavbarItems />
      </section>
    </navbar>
  );
};
