import ContactBar from "@/components/ContactBar";
import AboutUS from "@/components/AboutUs";
import Carousel from "@/components/Carousel";
import ContactUs from "@/components/BookingForm";
import OurFleet from "@/components/OurFleet";
import OurServices from "@/components/OurServices";
import Footer from "@/components/Footer";
import WhatsApp from "../components/WhatsAppButton";
export default function Home() {
  return (
    <>
      <ContactBar />
      <Carousel />

      <AboutUS />
      <ContactUs />
      <OurServices />
      <OurFleet />
      <Footer />
      <WhatsApp />
    </>
  );
}
