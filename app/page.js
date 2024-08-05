// "use client";
import Image from "next/image";
import Navbar from "./_component/Navbar/Navbar";
import Hero from "./_component/Hero/Hero";
import Spliden from "./_component/Spliden/Spliden";
import Landing from "./_component/Landing/Landing";
import Footer from "./_component/Footer/Footer";
import Our from "./_component/Our/Our";
import Skills from "./_component/Skills/Skills";
import Main from "./_component/Main/Main";
import Incaz from "./_component/Incaz/Incaz.jsx";
export default function Home() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <>
      <Landing>
        {/* <Navbar /> */}
        <Main />
      </Landing>
      {/* <Cta/> */}
      <Hero />
      <Our />
      <Skills />
      <Incaz />
      <Spliden />
      <Footer />
      {/* <Tacarob/> */}
    </>
  );
}
