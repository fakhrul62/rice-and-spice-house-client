import React from 'react';
import Lottie from "lottie-react";
import cta from "../assets/cta.json";

const CTA = () => {
    return (
        <div className="grid grid-cols-3 w-8/12 mx-auto my-20 border bg-amber-400 border-zinc-200 shadow-xl rounded-xl p-20">
            <div className='col-span-2 space-y-6'>
                <h3 className='logo-2 text-5xl text-zinc-900'>Experience Flavors Like Never Before!</h3>
                <button className='text-zinc-900 border-zinc-800 border-2 px-6 py-2 rounded-lg hover:border-zinc-800 hover:bg-zinc-800 hover:text-amber-400 duration-300'>Book Now</button>
            </div>
            <div className='relative'>
                <span className='absolute w-[140%] -top-10 left-0'><Lottie animationData={cta} loop={true} /></span>
            </div>
        </div>
    );
};

export default CTA;