import React from 'react'

const ItemCard = ({info}) => {
    console.log(info);
    const {thumbnail, price, description, title, rating, discountPercentage} = info;
  return (
    <div className='shadow-2xl  '>
        <div className='mx-6 p-3'> 
        {/* <div> */}
        <img 
        className='  rounded-3xl h-44 w-72 '
        src={thumbnail}
        />
        <ul>
            <li className='font-semibold'>{title}</li>
            <li className='font-bold'> {String.fromCharCode(8377)}{price}</li>
            {/* <li className='whitespace-normal break-words'>{description}</li> */}
            <button className='bg-blue-700 p-1 m-2 rounded-lg'>{rating}⭐</button>
            <button className='text-blue-800 font-semibold text-sm'>{discountPercentage}% off</button>

        </ul>
        </div>
       
    </div>
  )
}

export default ItemCard