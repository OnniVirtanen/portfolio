import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Hero from "./Components/Hero.js";
import About from "./Components/About.js";
import Skills from "./Components/Skills.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Conctact.js";
import "./Styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
