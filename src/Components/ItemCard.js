import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../Redux/Slices/cart-slice';

const ItemCard = ({info}) => {
    console.log(info);
    const {thumbnail, price, title, rating, discountPercentage} = info;
    const dispatch = useDispatch();
    const handleAddItem = (title) => {
    dispatch(addItems(title));
    }
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
            <button className='bg-blue-700 p-1 m-2 rounded-lg'>{rating}⭐</button>
            <button className='text-blue-800 font-semibold text-sm'>{discountPercentage}% off</button>
            <button className='w-15 p-2 mx-7 rounded-lg whitespace-nowrap bg-blue-600 hover:bg-blue-700'
            onClick={() => handleAddItem(title)}
            > Add To Cart </button>
        </ul>
        </div>
    </div>
  )
}

export default ItemCard