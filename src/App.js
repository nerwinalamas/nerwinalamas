import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
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
