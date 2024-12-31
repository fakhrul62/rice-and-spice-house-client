import React from 'react';

const MenuItemCard = ({menu}) => {
    const {name, recipe, image, price} = menu;
    return (
        <div className='grid grid-cols-6 gap-4'>
            <img src={image} className='rounded-lg'/>
            <div className='col-span-4'>
                <h3 className='text-3xl text-zinc-950 logo-2'>{name}  <span className='text-zinc-500 ml-5'>— — — —</span> </h3>
                <p className='text-zinc-700 font-3'>{recipe}</p>
            </div>
            <p className='text-amber-500'>${price}</p>
        </div>
    );
};

export default MenuItemCard;