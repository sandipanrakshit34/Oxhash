function Footer() {
  return (
    <div className="footer w-full max-w-[1920px] flex flex-col justify-center items-center">
      <div className=" md:w-[90%] w-[90%] h-[420px] md:h-[600px] flex flex-col justify-evenly items-start">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-center md:text-[70px] text-[25px] pt-16 pb-5 leading-tight font-bold text-white">
            Legacy is in your hand. <br />
            <span className="text-[#1AA9F9]">Unleash </span> your gaming
            potential now.
          </h1>
          <button className="bg-transparent my-10 border-2 border-[#1AA9F9] rounded-2xl text-white py-[8px] md:py-[22px] px-[50px] md:px-[100px] hover:bg-[#ffffff2c] text-[16px] md:text-[20px]">
            Buy Now
          </button>
        </div>
        <div className="text-white">
          <h2 className="md:text-[25px] text-[15px] font-medium py-2">Managed By</h2>
          <h2 className="md:text-[30px] text-[20px] font-medium py-0">O<span className="text-[#1AA9F9]">x</span>hash</h2>
          <h3 className="md:text-[20px] text-[10px] font-medium py-0"><span className="text-gray-400">©</span> 2023 0xhash. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
