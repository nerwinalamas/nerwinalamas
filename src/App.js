import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Aos from "aos";
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <div className="bg-backgroundColor w-full">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
