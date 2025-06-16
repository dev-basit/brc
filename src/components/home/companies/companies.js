// import Sliderr from "@/components/common/slider/slider";
import dynamic from "next/dynamic";
import styles from "./companies.module.css";

const Sliderr = dynamic(() => import("@/components/common/slider/slider"));

export const Companies = () => {
  return (
    <>
      <div className={styles.companiesContainer} data-aos="zoom-in-up">
        <h2>
          <pre>Trusted by more</pre>
          <pre>
            than <span> 4000</span> companies
          </pre>
        </h2>
      </div>
      <Sliderr />
    </>
  );
};
