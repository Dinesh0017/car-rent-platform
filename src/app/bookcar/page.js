import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/BookCar";


export default function BookCar() {
    return(
        <>

        <CarCard
        title="Bugatti Chiron"
        image="assets/bens.jpg"
        passengers={2}
        doors={4}
        transmission="Auto"
        price={20000}
      />
        <Footer />


        </>
    );
}