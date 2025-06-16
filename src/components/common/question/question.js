"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./question.module.css";
import { ICONS } from "@/utils";

export const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={styles.questionContainer} data-aos="zoom-in-up">
      <div className={styles.questionHeader} onClick={() => setIsOpen(!isOpen)}>
        <h1 className={styles.questionText}>{question}</h1>
        <div className={styles.icon}>
          <Image src={isOpen ? ICONS.CIRCLE_MINUS : ICONS.CIRCLE_PLUS} alt="open/close" />
        </div>
      </div>

      <div ref={contentRef} className={` ${isOpen ? "" : styles.answer}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
