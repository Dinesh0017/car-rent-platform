import FeaturesSection from "@/components/Feactures";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import View from "@/components/view";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <FeaturesSection/>
    <View></View>
    <Footer />
    </>

  );
}