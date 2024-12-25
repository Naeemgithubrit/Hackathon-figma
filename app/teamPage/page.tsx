
import AboutHeader from "@/components/AboutHeader";
import FreeTrials from "@/components/freeTrials";
import MeetOurTeam from "@/components/MeetOurTeam";
import Tailored from "@/components/tailored";


export default function Team() {
 

  return (
    <div className="w-full">
      <AboutHeader />
      <Tailored />
      <MeetOurTeam />
      <FreeTrials />
    </div>
  );
}