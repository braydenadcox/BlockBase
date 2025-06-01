"use client"
import { useState } from 'react';

const HomeCarousel = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0);

    const nextFrame = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
    };

    const lastFrame = () => {
        setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
    };

    return (
        <div className='relative w-full h-[680px] overflow-hidden'>
            <div className="absolute flex gap-4 bottom-4 left-1/2 -translate-x-1/2 text-white z-10">
                <p className='text-4xl'>
                    •
                </p>
                <p className='text-4xl'>
                    •
                </p>
                <p className='text-4xl'>
                    •
                </p>
            </div>
            <button onClick={lastFrame} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-9xl p-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 opacity-75">❰</button>
            <button onClick={nextFrame} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-9xl p-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 opacity-75">❱</button>
            <div className='flex transition-transform duration-1200 ease-in-out w-[300%] h-full transform'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                <div className='flex w-full h-full bg-yellow-500 shrink-0'> {/*Slide 0*/}
                    
                </div>
                <div className='flex w-full h-full bg-green-500 shrink-0'> {/*Slide 1*/}
                    
                </div>
                <div className='flex w-full h-full bg-purple-500 shrink-0'> {/*Slide 2*/}
                
                </div>
            </div>
        </div>
    );
};


export default HomeCarousel;