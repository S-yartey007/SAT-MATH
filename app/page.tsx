import Hero from "./components/Hero";
import About from "./components/About";
import Topics from "./components/Topics";
import Process from "./components/Process";
import Booking from "./components/Booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Topics />
      <Process />
      <Booking />
    </main>
  );
}
