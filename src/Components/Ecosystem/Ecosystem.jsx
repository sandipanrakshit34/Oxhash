import Players2 from "../../assets/images/Players (1).png";
import Players3 from "../../assets/images/Players (2).png";
import GroupImage from "../../assets/images/Group 3.png";

import CommunityCards from "../Card/CommunityCards";
import { useState } from "react";

function Ecosystem() {
    let [tabs, setTabs] = useState(0)

    // function handleTabs() {
    //     setTabs(0)
    // }
  return (
    <div
      className="w-full max-w-[1920px] flex flex-col justify-center items-center"
      id="MainCard"
    >
      <div className="w-[80%] mt-10 text-white text-center flex flex-col justify-center items-center">
        <div className="w-full items-center grid grid-cols-1 md:grid-cols-2">
          <div className="text-left">
            <h1 className="text-[50px]">Ecosystem</h1>
          </div>
          <div className="flex md:justify-end justify-start">
            <ul className="flex justify-end gap-5 text-[20px]">
              <li>
                <button onClick={() => setTabs(0)} className="text-[20px] hover:text-[#ffffff9f]">
                  All
                </button>
              </li>
              <li>
                <button onClick={() =>  setTabs(1)} className="text-[20px] hover:text-[#ffffff9f]">
                  Game
                </button>
              </li>
              <li>
                <button onClick={() =>  setTabs(2)} className="text-[20px] hover:text-[#ffffff9f]">
                  Grow Tools
                </button>
              </li>
              <li>
              <button className="text-[20px] hover:text-[#ffffff9f]">
                    Oops
              </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="glassMorfizam mt-10 md:py-36 py-14 md:px-14 px-8 flex flex-col gap-5 justify-center items-center">
          <div className={`${tabs === 0 ? "block" : "hidden"}`}>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <CommunityCards
                  image={Players3}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div>
                <CommunityCards
                  image={Players2}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div>
                <CommunityCards
                  image={Players3}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <CommunityCards
                  image={Players2}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div>
                <CommunityCards
                  image={Players3}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div>
                <CommunityCards
                  image={Players2}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
            </div>
          </div>
          <div className={`${tabs === 1 ? "block" : "hidden"}`}>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <CommunityCards
                  image={Players3}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div>
                <CommunityCards
                  image={Players2}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div>
                <CommunityCards
                  image={Players3}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <CommunityCards
                  image={Players2}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div className="block md:hidden">
              </div>
              <div className="block md:hidden">
              </div>
            </div>
          </div>
          <div className={`${tabs === 2 ? "block" : "hidden"}`}>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <CommunityCards
                  image={Players3}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div>
                <CommunityCards
                  image={Players2}
                  playerImages={GroupImage}
                  gameName="Skyborne"
                  gamelink="ToomuchLag"
                  gamePrice="242eth"
                />
              </div>
              <div className="block md:hidden">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
