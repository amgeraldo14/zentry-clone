import About from "./components/About";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <HeroSection />
      <About />
    </main>
  );
};

export default App;
