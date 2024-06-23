import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Banner from "./components/Banner/Banner.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import WyChoose from "./components/WyChoose/WyChoose.jsx";


const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Banner />
      <WyChoose/>
      <About  />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
