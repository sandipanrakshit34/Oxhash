import Button from "../Button/Button";
import Header from "../Header/Header";

function HeroSection() {
  return (
    <div
      className="w-full max-w-[1920px] flex flex-col justify-center items-center"
      id="HeroSection"
    >
      <Header />

      <div className="w-[80%] text-center flex flex-col justify-center items-center">
        <h1 className="md:text-[118px] text-[65px] pt-16 leading-none font-semibold text-white">
          Build On The Edge <br /> Of{" "}
          <span className="text-[#1AA9F9]">Gaming</span>
        </h1>
        <p className="md:w-[60%] w-[100%] md:text-[20px] font-light text-[18px] py-8 pb-16 leading-tight text-[#FFFFFF]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of{" "}
        </p>
        <div className="flex gap-5 pb-16">
          <Button value="Start Building" />
          <Button value="Explore Docs" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
