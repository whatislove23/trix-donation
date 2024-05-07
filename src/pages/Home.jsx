import About from "../components/home/About.jsx";
import CallToDonate from "../components/home/CallToDonate.jsx";
import FinishedCollections from "../components/home/FinishedCollections.jsx";
import Hero from "../components/home/Hero.jsx";
import Join from "../components/home/Join.jsx";
import Stast from "../components/home/Stast.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col  gap-20 py-20 md:gap-28  md:py-28 lg:gap-32 lg:py-32 ">
        <About />
        <Stast />
        <FinishedCollections />
        <Join />
        <CallToDonate />
      </div>
    </>
  );
}
