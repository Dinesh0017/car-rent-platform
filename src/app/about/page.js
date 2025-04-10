import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMemberCard';
import JoinMember from '@/components/JoinMember';
import StateCard from '@/components/StateCard';


export default function AboutUs() {
    return(
        <>
        <Navbar/>
        <TeamMember />
        <JoinMember />
        <StateCard />
        <Footer />


        </>
    );
}