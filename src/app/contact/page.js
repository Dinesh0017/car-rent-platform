import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MapSelector from "@/components/MapSelector";

export default function Contact() {
    return (
      <>
        <Navbar />
        <MapSelector/>
        <ContactForm />
        <Footer />
      </>
    );
  }