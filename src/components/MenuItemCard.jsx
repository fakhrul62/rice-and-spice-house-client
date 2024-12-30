import React from 'react';

const MenuItemCard = ({menu}) => {
    const {name, recipe, image, price} = menu;
    return (
        <div className='flex gap-2'>
            <img src={image} className='w-32 mr-5 rounded-lg'/>
            <div>
                <h3 className='text-lg text-zinc-950'>{name}  <span className='text-zinc-500 ml-5'>— — — —</span> </h3>
                <p className='text-zinc-700'>{recipe}</p>
            </div>
            <p className='text-amber-500'>${price}</p>
        </div>
    );
};

export default MenuItemCard;