import {
  Card,
  ClientsCards,
  EmpowerCard,
  Footer,
  HeroSection,
  MainCommunityCards,
  Updates,
} from "../Components";
import frame1 from "../assets/videos/Frame 1.svg";
import frame2 from "../assets/videos/Frame 2.png";
import frame3 from "../assets/videos/Frame 3.png";

function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <Card
        Image={frame1}
        paragraph="As the pioneer gaming ecosystem on the Optimism Superchain, 0xhash leverages OP Stack Layer2 tech to offer blockchain games the best of Ethereum with no code changes needed, at a significantly lower cost."
        imageOnLeft={true}
      />
      <Card
        Image={frame2}
        paragraph="Supported by 0xhash collective, launch with Dojo, onboard with Space3, localize with PlayNation, marketing with Gosu Network and engage with Eko ID."
        imageOnLeft={false}
      />
      <Card
        Image={frame3}
        paragraph="The oxhash Collective is comprised of top web3 gaming thought leaders who are committed to shaping the mainstream adoption of a decentralized world. We understand web3 game development obstacles and offer fair distribution through our transparent governance model. "
        imageOnLeft={true}
      />
      <MainCommunityCards />
      <Updates />
      <ClientsCards />
      <EmpowerCard />
      <Footer />
    </div>
  );
}

export default Home;
