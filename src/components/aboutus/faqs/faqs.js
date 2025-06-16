import styles from "./faqs.module.css";
import commonStyles from "../../../app/common.module.css";
import { Question } from "@/components/common/question/question";
import { ENUMS } from "@/utils";

export const FAQS = () => {
  return (
    <div className={styles.clientsContainer} data-aos="fade-in">
      <div className={styles.headings}>
        <p className={commonStyles.sectionName}>FAQs</p>
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>
        <p>Hear first-hand from our incredible community of customers.</p>
      </div>

      {ENUMS.FAQS.map((item, index) => (
        <Question key={index} question={item.qus} answer={item.ans} />
      ))}

      <div className={styles.stillQuestion}>
        <div>
          <h2>Still have questions?</h2>
          <p>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
        </div>
        <button>Contact Us</button>
      </div>
      <br />
    </div>
  );
};
