import Image from "next/image";
import styles from "./testimonial.module.css";
import commonStyles from "@/app/common.module.css";
import { ICONS } from "@/utils";

const testimonials = [
  {
    name: "Gary Pollich",
    title: "Future Group Facilitator",
    image: ICONS.PERSON1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.",
  },
  {
    name: "Vicki Rohan",
    title: "Dynamic Usability Specialist",
    image: ICONS.PERSON2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.",
  },
  {
    name: "Marjorie Schinner",
    title: "Corporate Markets Consultant",
    image: ICONS.PERSON3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.",
  },
];

export const Testimonial = () => {
  return (
    <div className={styles.testimonial} data-aos="zoom-in">
      <div className={styles.testimonialHeading}>
        <p className={commonStyles.textDashed}>Testimonials</p>
        <h1>see what others people are saying </h1>
        <p className={styles.testimonialText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur
          nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.
          Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        {/* <div className={styles.backgroundImage}>
          <Image src={ICONS.BACKGROUND} alt="background" />
          </div> */}

        <Image src={ICONS.BACKGROUND} alt="background" className={styles.background} />
        {testimonials.map(({ name, title, image, text }, idx) => (
          <div key={idx} className={styles.card} data-aos="fade-up">
            <div className={styles.profile}>
              <Image src={image} alt={name} width={70} height={70} className={styles.profilePic} />
              <div className={styles.profileInfo}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.role}>{title}</p>
              </div>
            </div>
            <p className={styles.feedback}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
