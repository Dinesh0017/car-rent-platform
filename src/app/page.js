import FeaturesSection from "@/components/Feactures";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <FeaturesSection/>

    <h1 className="bg-red text-3xl font-bold text-center mt-10">Welcome to Car Rental</h1>
    </>

  );
}