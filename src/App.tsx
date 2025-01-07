import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
    </main>
  );
};

export default App;
