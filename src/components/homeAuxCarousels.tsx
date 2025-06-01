"use client"
import { useState } from "react";

export const UpcomingCarousel = () => {
    return (
        <div className='flex flex-col w-full h-[250px] gap-5 overflow-hidden'>
            <div className='flex w-full h-[100px] items-center justify-center text-black'>
                <h1 className='text-black text-4xl'>UPCOMING RELEASES FROM LEGO</h1>
            </div>
            <div className='overflow-hidden w-full px-8 h-[150px]'>
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
            <div className="flex-1 mx-4 bg-orange-500"></div>
            <div className="flex-1 mx-4 bg-yellow-500"></div>
            <div className="flex-1 mx-4 bg-green-500"></div>
            <div className="flex-1 mx-4 bg-blue-500"></div>
            <div className="flex-1 mx-4 bg-purple-500"></div>
        </div>
    );
};
