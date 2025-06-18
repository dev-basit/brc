import { AboutUsFeatured } from "@/components/aboutus/about-us-featured/about-us-featured";
import { Mission } from "@/components/aboutus/mission/mission";
import { AboutUsCards } from "@/components/aboutus/about-us-cards/about-us-cards";
import { Values } from "@/components/aboutus/values/values";
import { Clients } from "@/components/home/clients/clients";
import { FAQS } from "@/components/aboutus/faqs/faqs";

export default function About_Us() {
  return (
    <>
      <AboutUsFeatured />
      <Mission />
      <AboutUsCards />
      <Values />
      {/* <Clients /> */}
      {/* <FAQS /> */}
    </>
  );
}
