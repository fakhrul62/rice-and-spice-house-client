import React from 'react';
import Lottie from "lottie-react";
import cta from "../assets/cta.json";

const CTA = () => {
    return (
        <div className="grid grid-cols-3 w-8/12 mx-auto my-20 border border-zinc-200 shadow-xl rounded-xl p-20">
            <div className='col-span-2 space-y-4'>
                <h3 className='logo-2 text-5xl text-zinc-900'>Experience Flavors Like Never Before!</h3>
                <button className=' border border-amber-500 bg-amber-400 text-white px-6 py-2 rounded-lg'>Book Now</button>
            </div>
            <div>
                <span className='w-full'><Lottie animationData={cta} loop={true} /></span>
            </div>
        </div>
    );
};

export default CTA;