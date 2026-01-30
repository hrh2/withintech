import React from 'react';
import SectionHero from "../components/SectionHero.jsx";
import SectionPartners from "../components/SectionPartners.jsx";
import SectionAboutUs from "../components/SectionAboutUs.jsx";
import SectionProgram from "../components/SectionProgram.jsx";
import SectionWhy from "../components/SectionWhy.jsx";
import SectionTestmonial from "../components/SectionTestmonial.jsx";
import SectionDonate from "../components/SectionDonate.jsx";

function Home() {
    return (
        <>
            <SectionHero/>
            <SectionPartners/>
            <SectionAboutUs/>
            <SectionProgram/>
            <SectionWhy/>
            <SectionTestmonial/>
            <SectionDonate/>
        </>
    );
}

export default Home;