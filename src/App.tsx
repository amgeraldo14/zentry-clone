import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

const App = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
