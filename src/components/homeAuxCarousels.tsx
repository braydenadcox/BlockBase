"use client"

export const UpcomingCarousel = () => {
    return (
        <div className='flex flex-col w-full h-[250px] gap-5 overflow-hidden'>
            <div className='flex w-full h-[100px] items-center justify-center text-black'>
                <h1 className='text-black text-4xl'>UPCOMING RELEASES FROM LEGO</h1>
            </div>
            <div className='w-full px-4 h-[205px] py-2 overflow-x-scroll scroll-smooth hide-scrollbar'>
                <div className='flex flex-nowrap w-max gap-8'>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                    <div className='bg-gray-300 rounded-xl w-[137px] h-[137px]'></div>
                </div>
            </div>
        </div>
    );
};

export const PopularDiv = () => {
    return (
        <div className='flex w-full h-[450px] justify-evenly py-8 px-4'>
            <div className="flex-1 mx-4 bg-red-500"></div>
            <div className="flex-1 mx-4 bg-red-500"></div>
            <div className="flex-1 mx-4 bg-red-500"></div>
            <div className="flex-1 mx-4 bg-red-500"></div>
            <div className="flex-1 mx-4 bg-red-500"></div>
            <div className="flex-1 mx-4 bg-red-500"></div>
        </div>
    );
};
