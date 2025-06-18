"use client";

import { useState } from "react";
import styles from "./contactus-switcher.module.css";
import Image from "next/image";
import { ICONS } from "@/utils";
import { ContactUs } from "../contact-us/contact-us";

export const ContactUsSwitcher = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className={styles.tabSwitcher}>
      <div className={styles.tabSwitcherContent}>
        <button
          className={`${styles.tabButton} ${activeTab === "contact" ? styles.active : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          <Image src={ICONS.CALL} width={20} height={20} className={styles.icon} alt="call" /> Contact Us
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "quote" ? styles.active : ""}`}
          onClick={() => setActiveTab("quote")}
        >
          <Image src={ICONS.ENVELOPE} width={20} height={20} className={styles.icon} alt="call" /> Request A
          Quote
        </button>
      </div>

      {activeTab === "contact" && <ContactUs />}
      {activeTab === "quote" && <ContactUs />}
    </div>
  );
};
