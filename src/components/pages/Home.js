import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import HomeTest from "./homeTest";
import Footer from "../Footer";


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <HomeTest />
      <Footer />
    </>
  );
}

export default Home;
