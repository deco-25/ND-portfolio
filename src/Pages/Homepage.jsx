import React from "react";
import Hero from "../Components/Homepage/Hero";
import Hello from "../Components/Homepage/Hello";
import Apart from "../Components/Homepage/Apart";
import Licensed from "../Components/Homepage/Licensed";
import Testimonials from "../Components/Homepage/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Hello />
      <Apart />
      <Testimonials />
      <Licensed />
    </div>
  );
};

export default Homepage;
