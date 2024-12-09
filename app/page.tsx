import FifthSection from "@/components/FifthSection";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import SecondSection from "@/components/SecondSection";
import SixthSection from "@/components/SixthSection";
import ThirdSection from "@/components/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroImage/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Footer/>
    </div>
  );
}
