"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Animation() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return null;
}
