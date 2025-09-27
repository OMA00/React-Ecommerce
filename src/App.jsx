import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">This is the new App.</h1>;
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
