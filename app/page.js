import Image from "next/image";
import Navbar from "./_component/Navbar/Navbar";
import Hero from "./_component/Hero/Hero";
import Spliden from "./_component/Spliden/Spliden";
import Landing from "./_component/Landing/Landing";
import Footer from "./_component/Footer/Footer";

export default function Home() {
  return (
    <>
      <Landing>
        <Navbar />
      </Landing>
      <Hero />
      <Spliden />
      <Footer />
    </>
  );
}
