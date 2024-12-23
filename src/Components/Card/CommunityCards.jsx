function CommunityCards({image, playerImages, gameName, gamelink, gamePrice}) {
  return (
    <div>
        <div className='relative'>
            <img className='rounded-2xl' src={image} alt="" />
            <div className='bg-[#ffffff94] absolute bottom-0 p-6 w-full rounded-b-2xl'>
                <div className='absolute left-0 -top-8'>
                    <img src={playerImages} alt="" />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-white text-[20px] font-bold py-3'>{gameName}</p>
                        <a href="" className='text-white text-[16px] underline font-semibold'>{gamelink}</a>
                    </div>
                    <div className='text-right'>
                        <p className='text-[26px] font-bold text-white py-3'>{gamePrice}</p>
                        <button className='border-2 px-[32px] py-[8px] rounded-xl text-[16px] font-bold text-white hover:bg-[#ffffff36]'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommunityCards