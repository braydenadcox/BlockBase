"use client"
import { useState } from "react";

export const UpcomingCarousel = () => {
    return (
        <div className='flex w-full h-[275px] bg-pink-500'>
            <p>filler</p>
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
