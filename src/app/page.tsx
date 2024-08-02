import About from "@/components/About";
import Contact from "@/components/Contact";
import DigitalArt from "@/components/DigitalArt";
import Gallery from "@/components/Gallery";
import Home from "@/components/Home";
import Menu from "@/components/Menu";

export default function Index() {
  return (
    <>
      <Menu />
      <Home />
      <DigitalArt />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
