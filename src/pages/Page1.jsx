import React from "react";
import Carousel from "../components/Carousel";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Itinerary from "../components/Itinerary";
import RSVP from "../components/RSVP";


function Page1() {
    return (
      <>
      <Header/>
      <HeroSection/>
      <Carousel/>
      <Countdown/>
      <Itinerary/>
      <Gallery/>
      <RSVP/>
      </>
    );
  }
  
  export default Page1;