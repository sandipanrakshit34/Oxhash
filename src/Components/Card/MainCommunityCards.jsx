import CommunityCards from "./CommunityCards";
import Card1 from "../../assets/images/Players (1).jpeg";
import Card2 from "../../assets/images/Players (2).jpeg";
import Card3 from "../../assets/images/Players (3).jpeg";

import GroupImage from "../../assets/images/Group 3.png";

function MainCommunityCards() {
  return (
    <div className="w-full max-w-[1920px] flex flex-col justify-center items-center mt-16">
        <h1 className="w-[90%] text-center md:text-[96px] text-[50px] pt-16 leading-none font-bold text-white py-16">
        Our community <span className="text-[#1AA9F9]">is playing</span>
        </h1>
      <div className="md:w-[90%] w-[90%] grid grid-cols-1 md:grid-cols-3 gap-10 my-14">
        <CommunityCards
          image={Card3}
          playerImages={GroupImage}
          gameName="Skyborne"
          gamelink="ToomuchLag"
          gamePrice="242eth"
        />
        <CommunityCards
          image={Card1}
          playerImages={GroupImage}
          gameName="Skyborne"
          gamelink="ToomuchLag"
          gamePrice="242eth"
        />
        <CommunityCards
          image={Card2}
          playerImages={GroupImage}
          gameName="Skyborne"
          gamelink="ToomuchLag"
          gamePrice="242eth"
        />
      </div>

      <div className="md:w-[90%] w-[90%] grid grid-cols-1 md:grid-cols-3 gap-10">
        <CommunityCards
          image={Card2}
          playerImages={GroupImage}
          gameName="Skyborne"
          gamelink="ToomuchLag"
          gamePrice="242eth"
        />
        <CommunityCards
          image={Card1}
          playerImages={GroupImage}
          gameName="Skyborne"
          gamelink="ToomuchLag"
          gamePrice="242eth"
        />
        <CommunityCards
          image={Card3}
          playerImages={GroupImage}
          gameName="Skyborne"
          gamelink="ToomuchLag"
          gamePrice="242eth"
        />
      </div>
    </div>
  );
}

export default MainCommunityCards;
