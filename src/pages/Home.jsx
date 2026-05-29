import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Strip from "../components/Strip.jsx";
import Curriculum from "../components/Curriculum.jsx";
import Flavors from "../components/Flavors.jsx";
import Closing from "../components/Closing.jsx";
import Footer from "../components/Footer.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Home() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Strip />
      <Curriculum />
      <Flavors />
      <Closing />
      <Footer />
    </>
  );
}
