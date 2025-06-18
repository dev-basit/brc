import { AboutUsFeatured } from "@/components/aboutus/about-us-featured/about-us-featured";
import { Mission } from "@/components/aboutus/mission/mission";
import { Clients } from "@/components/home/clients/clients";
import { FAQS } from "@/components/aboutus/faqs/faqs";
import AboutUsCards from "@/components/aboutus/about-us-cards/about-us-cards";

export default function About_Us() {
  return (
    <>
      <AboutUsFeatured />
      <Mission />
      <AboutUsCards />
      {/* <Clients /> */}
      {/* <FAQS /> */}
    </>
  );
}
