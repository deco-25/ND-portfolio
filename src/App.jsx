import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

/************************************************/
/* Route for the entire website */
/************************************************/

export default function App() {

    useEffect(() => {
      AOS.init({
        duration: 700, // animation duration
        once: true,     // whether animation should happen only once
        offset: 100,    // offset (in px) from the original trigger point
      });
    }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
