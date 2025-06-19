import { Featured } from "@/components/home/featured/featured";
import { Services } from "@/components/home/services/services";
import { Trusted } from "@/components/home/trusted/trusted";
import { ChooseUs } from "@/components/home/choose-us/choose-us";
import { Testimonial } from "@/components/home/testimonial/testimonial";
import { Questions } from "@/components/home/questions/questions";
import { ContactUs } from "@/components/home/contact-us/contact-us";
import { TrustedMbl } from "@/components/home/trusted-mbl/trusted-mbl";

export default function Home() {
  return (
    <>
      <Featured />
      <Services />
      <Trusted />
      <TrustedMbl />
      <ChooseUs />
      <Testimonial />
      <Questions />
      <ContactUs />
    </>
  );
}
