import FeaturesSection from "@/components/Feactures";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import View from "@/components/view";
import RentLocation from "@/components/RentLocation";
import GallerySection from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <View />
      <RentLocation />
      <GallerySection />
      <Footer />
    </>
  );
}
