function Card({ Image, paragraph, imageOnLeft }) {
  return (
    <div>
      {imageOnLeft ? (
        <div className="w-full max-w-[1920px] flex justify-center items-center my-10">
          <div className="md:w-[90%] w-[90%] grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex justify-start items-center">
              <div className="md:w-[80%] w-[100%]">
                <img src={Image} alt="" />
              </div>
            </div>
            <div className="flex justify-center items-center font-normal text-white text-[25px] md:py-0 py-8">
            <p className="md:text-[30px] text-[22px]">{paragraph}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[1920px] flex justify-center items-center">
          <div className="md:w-[90%] w-[90%] grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex justify-start items-center font-normal text-white text-[25px] md:py-0 py-8">
                <p className="md:text-[30px] text-[22px]">{paragraph}</p>
            </div>
            <div className="flex justify-end items-center">
              <div className="md:w-[80%] w-[100%]">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
