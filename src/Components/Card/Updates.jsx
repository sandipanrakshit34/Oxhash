import { image1, image2, image3, image4, image5 } from "../../assets/images";

function Updates() {
  return (
    <div className="w-full max-w-[1920px] flex flex-col justify-center items-center">
      <h1 className="w-[90%] text-center md:text-[96px] text-[50px] leading-none font-bold text-white py-16">
        <span className="text-[#1AA9F9]">Unlock </span> exclusive updates
      </h1>
      <div className="w-[90%] grid grid-cols-2 md:grid-cols-6 text-white gap-2">
        <div className="bg-[#19161C] text-center py-10">
          <h1 className="text-[35px] font-normal text-[#F087FF]">11,000</h1>
          <p className="text-[12px] text-[#BABABA] font-normal">
            ethereum gaming House participants
          </p>
        </div>
        <div>
            <img src={image1} alt="" />
        </div>
        <div className="col-span-2 row-span-2">
            <img src={image4} alt="" />
        </div>
        <div className="row-span-2">
            <img src={image3} alt="" />
        </div>
        <div>
            <img src={image5} alt="" />
        </div>
        <div>
            <img src={image2} alt="" />
        </div>
        <div className="bg-[#19161C] text-center py-10">
          <h1 className="text-[35px] font-normal text-[#FFEB3B]">3,800</h1>
          <p className="text-[12px] text-[#BABABA] font-normal">
            ethereum Breakpoint 2022 attendees
          </p>
        </div>
        <div className="bg-[#19161C] text-center py-10">
          <h1 className="text-[35px] font-normal text-[#F087FF]">11,000</h1>
          <p className="text-[12px] text-[#BABABA] font-normal">
            ethereum gaming House participants
          </p>
        </div>
      </div>
    </div>
  );
}

export default Updates;
