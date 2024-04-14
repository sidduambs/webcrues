import React, { useEffect } from "react";
import { useGlobalContext } from "./context/AppProvider"; // Correct import path

import HeroSection from "./components/HeroSection";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
    const { updateHomePage } = useGlobalContext();

    useEffect(() => {
        updateHomePage();
    }, []);

    return (
        <>
            <HeroSection />
            <Services />
            <Contact />
        </>
    );
};

export default Home;
