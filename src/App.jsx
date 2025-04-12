import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Layout/ScrollToTop";
import { useEffect, useState } from "react";
import { IntroVideo } from "./assets";
import Aos from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";

/************************************************/
/* Route for the entire website */
/************************************************/

export default function App() {
  const [loading, setLoading] = useState(true);
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading ? (
        <div className="bg-white  flex justify-center items-center">
          <video
            src={IntroVideo}
            autoPlay
            muted
            playsInline
            onEnded={() => setLoading(false)} // optional if you want to hide video after playing
            className="w-full  h-screen object-fit"
          />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
