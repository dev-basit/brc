import { Featured } from "@/components/home/featured/featured";
import { Services } from "@/components/home/services/services";
import { Trusted } from "@/components/home/trusted/trusted";
import { ChooseUs } from "@/components/home/choose-us/choose-us";
import { Clients } from "@/components/home/clients/clients";
import { Companies } from "@/components/home/companies/companies";
import { ContactUs } from "@/components/home/contact-us/contact-us";
import { Testimonial } from "@/components/home/testimonial/testimonial";

export default function Home() {
  return (
    <>
      <Featured />
      <Services />
      <Trusted />
      <ChooseUs />
      <Testimonial />
      {/* <Companies /> */}
      {/* <Clients /> */}
      {/* <ContactUs /> */}
    </>
  );
}
