import Header from "../Header/Header";
import Button from "../Button/Button";
import mainCard from '../../assets/images/mainCard.png'

function MainCard() {
  return (
    <div
      className="w-full max-w-[1920px] flex flex-col justify-center items-center"
      id="MainCard"
    >
      <Header />

      <div className="md:w-[80%] w-[90%] mt-10 text-white text-center flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="text-left ">
            <h1 className="md:text-[100px] text-[80px] font-medium leading-none">0xhash Ecosystem.</h1>
            <p className="md:text-[25px] text-[18px] pt-4">Explore games, apps, and integrations built on the Ancient8 Chain ecosystem.</p>
            <div className="flex gap-4 mt-5">
                <Button value="Build now"/>
                <Button value="Read the Docs"/>
            </div>
          </div>
          <div className="flex md:justify-end justify-start mt-10 md:mt-0">
            <div className="md:w-[80%] w-[90%] ">
                <img src={mainCard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
