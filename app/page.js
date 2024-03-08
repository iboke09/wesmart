import Image from "next/image";
import Navbar from "./_component/Navbar/Navbar";
import Hero from "./_component/Hero/Hero";
import Spliden from "./_component/Spliden/Spliden.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Spliden />
    </div>
  );
}
