import About from "../components/About";
import CallToDonate from "../components/CallToDonate.jsx";
import FinishedCollections from "../components/FinishedCollections.jsx";
import Hero from "../components/Hero";
import Join from "../components/Join.jsx";
import Stast from "../components/Stast";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-32 py-32">
        <About id={"about"} />
        <Stast />
        <FinishedCollections />
        <Join />
        <CallToDonate />
      </div>
    </>
  );
}
