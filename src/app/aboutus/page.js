import { AboutUsFeatured } from "@/components/aboutus/about-us-featured/about-us-featured";
import { Mission } from "@/components/aboutus/mission/mission";
import { AboutUsCards } from "@/components/aboutus/about-us-cards/about-us-cards";
import { Values } from "@/components/aboutus/values/values";
import { Vision } from "@/components/aboutus/vision/vision";
import { Ready } from "@/components/aboutus/ready/ready";

export default function About_Us() {
  return (
    <>
      <AboutUsFeatured />
      <Mission />
      {/*
      <AboutUsCards />
      <Values />
      <Vision />
      <Ready /> */}
    </>
  );
}
