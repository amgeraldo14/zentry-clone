import About from "./components/About";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Features />
    </main>
  );
};

export default App;
