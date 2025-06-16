import styles from "./featured.module.css";
import Image from "next/image";
import { ICONS } from "@/utils";

export const Featured = () => {
  return (
    <main className={styles.featuredContainer} data-aos="fade-up">
      <div className={styles.featuredContentContainer}>
        <div className={styles.featuredLeft}>
          <p className={styles.bar}>We Specialize in the transportation</p>
          <h1>Explore The Best Logistic & Transport</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue nunc molestie accumsan ipsum odio eu eget cras.
            Massa sit risus quam magna et laoreet ullamcorper massa.
          </p>
          <button>Explore our Services</button>
        </div>
        <div className={styles.featuredRight}>
          <div className={styles.featuredImageContainer}>
            <Image src={ICONS.FEATURED} alt="featured" />
          </div>
        </div>
      </div>
    </main>
  );
};
