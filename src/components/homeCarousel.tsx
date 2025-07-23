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
                <a href='https://www.lego.com/en-us/product/nike-dunk-x-lego-set-43008' target='_blank' rel='noopener noreferrer' className='flex w-full h-full shrink-0'>
                    <div className='flex w-full h-full shrink-0 bg-cover bg-left bg-no-repeat bg-orange-500' 
                    style = {{ backgroundImage: `url('/images/NikeFrontPage.png')`, backgroundSize: '34% 125%' }}> {/*Slide 1*/}
                    </div>
                </a>
                <a href='https://www.lego.com/en-us/themes/one-piece' target='_blank' rel='noopener noreferrer' className='flex w-full h-full shrink-0'>
                    <div className='flex w-full h-full shrink-0 bg-cover bg-left bg-no-repeat bg-blue-500' 
                    style = {{ backgroundImage: `url('/images/OnePieceFrontUI.png')`, backgroundSize: '34% 125%' }}> {/*Slide 0*/}
                    </div>
                </a>
                <a href='https://www.lego.com/en-us/themes/star-wars' target='_blank' rel='noopener noreferrer' className='flex w-full h-full shrink-0'>
                    <div className='flex w-full h-full shrink-0 bg-cover bg-left bg-no-repeat bg-black' 
                    style = {{ backgroundImage: `url('/images/StarWarsFrontPage.png')`, backgroundSize: '34% 125%' }}> {/*Slide 2*/}
                    </div>
                </a>
            </div>
        </div>
    );
};


export default HomeCarousel;