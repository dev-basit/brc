import { useState } from "react";
import styles from "./request-quote.module.css";
import commonStyles from "../../../app/common.module.css";

const budgetOptions = [
  { id: "1", label: "$25k - $50k", value: "25-50k" },
  { id: "2", label: "$50k - $100k", value: "50-100k" },
  { id: "3", label: "$100k - $200k", value: "100-200k" },
  { id: "4", label: "More than $200k", value: "more-200k" },
  { id: "5", label: "Don't know yet", value: "dont-know-yet" },
];

export const RequestQuote = () => {
  const [selectedBudget, setSelectedBudget] = useState(budgetOptions[0].value);

  const handleOptionChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  return (
    <div className={styles.requestQuote}>
      <div className={styles.requestQuoteContainer}>
        <div className={styles.leftContainer} data-aos="fade-right">
          <div className={styles.contactDetails}>
            <p className={styles.text}>
              Tell us about your industry, your idea, your expectations, and any work that has already been
              completed. Your input will help us provide you with an accurate project estimation. 
            </p>
            <p>
              Tell us more about your project <span style={{ color: "red" }}>*</span>
            </p>
            <div className={styles.requestQuoteFormItem}>
              <textarea className={styles.requestQuoteTextArea} placeholder="Type here.." />
            </div>
          </div>
        </div>

        <div className={styles.rightContainer} data-aos="fade-left">
          <div className={commonStyles.flexColumn}>
            <div className={styles.formDualItems}>
              <div className={styles.requestQuoteFormItem}>
                <p className={commonStyles.formItemLabelSecondary}>
                  Full Name <span style={{ color: "red" }}>*</span>
                </p>
                <input className={styles.requestQuoteFormInput} placeholder="Enter Full Name" />
              </div>
            </div>
            <div className={styles.requestQuoteFormItem}>
              <p className={commonStyles.formItemLabelSecondary}>
                Email <span style={{ color: "red" }}>*</span>
              </p>
              <input className={styles.requestQuoteFormInput} placeholder="Enter Email" />
            </div>
            <div className={styles.requestQuoteFormItem}>
              <p className={commonStyles.formItemLabelSecondary}>
                Phone No
                <span style={{ color: "gray", fontStyle: "italic" }}>
                  <span style={{ fontStyle: "normal", color: "gray" }}>(</span>Optional
                  <span style={{ fontStyle: "normal", color: "gray" }}> )</span>
                </span>
              </p>
              <input className={styles.requestQuoteFormInput} placeholder="Enter Email" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.budgetContainer}>
        <h2 className={styles.budgetTitle}>Your Budget</h2>
        <div className={styles.budgetOptionsContainer}>
          {budgetOptions.map((option) => (
            <label key={option.id} className={styles.radioLabel}>
              <input
                type="radio"
                name="budget"
                value={option.value}
                checked={selectedBudget === option.value}
                onChange={handleOptionChange}
                className={styles.radioInput}
              />
              <span className={styles.customRadio}></span>
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div className={commonStyles.flexStartCenter}>
        <input className={commonStyles.formInput} type="checkbox" placeholder="Enter Email" />
        <p>BRC can contact me over email with related information in the future.</p>
      </div>

      <div className={commonStyles.flexStartCenter}>
        <input className={commonStyles.formInput} type="checkbox" placeholder="Enter Email" />
        <p>I accept the Terms & Privacy Policy.</p>
      </div>

      <br />

      <button className={`${commonStyles.buttonPrimary} ${styles.quoteButton}`}>Send</button>
    </div>
  );
};
