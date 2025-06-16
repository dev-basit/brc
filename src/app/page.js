import { Featured } from "@/components/home/featured/featured";
import { Companies } from "@/components/home/companies/companies";
import { Services } from "@/components/home/services/services";
import { AboutUs } from "@/components/home/about-us/about-us";
import { Clients } from "@/components/home/clients/clients";
import { ContactUs } from "@/components/home/contact-us/contact-us";

export default function Home() {
  return (
    <>
      <Featured />
      <Companies />
      <Services />
      <AboutUs />
      <Clients />
      <ContactUs />
    </>
  );
}
