import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <main className=" min-h-screen w-screen overflow-x-hidden">
      <HeroSection />
      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
};

export default App;
