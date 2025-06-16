import { Mission } from "@/components/aboutus/mission/mission";
import { AboutUsFeatured } from "@/components/aboutus/about-us-featured/about-us-featured";
import { Vision } from "@/components/aboutus/vision/vision";
import { Clients } from "@/components/home/clients/clients";
import { FAQS } from "@/components/aboutus/faqs/faqs";

export default function About_Us() {
  return (
    <>
      <AboutUsFeatured />
      <Mission />
      <Vision />
      <Clients />
      <FAQS />
    </>
  );
}
