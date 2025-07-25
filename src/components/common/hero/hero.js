"use client";

import { useRef, useEffect } from "react";
import styles from "./hero.module.css";

export const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef?.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.error("Video play failed:", error);
        }
      };

      playVideo();
    }
  }, []);

  return (
    <div className={styles.heroContainer}>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        controls={false}
      >
        <source src="/videos/brc-video.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.heroOverlay} />
    </div>
  );
};
