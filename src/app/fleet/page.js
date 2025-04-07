import React from 'react';
import Navbar from '@/components/Navbar';
import GallerySection from '@/components/Gallery';
import Footer from '@/components/Footer';
import PricingSection from '@/components/Pricing';
import RentLocation from '@/components/RentLocation';




export default function Fleet() {
    return (
      <>
        <Navbar />
        <GallerySection />
        <PricingSection />
        <RentLocation />
        <Footer />
      </>
    );
  }