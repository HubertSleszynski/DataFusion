import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
    once: true,
  });
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
