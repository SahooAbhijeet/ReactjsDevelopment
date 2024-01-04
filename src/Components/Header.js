import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {productList} from '../utils/constants'


const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState(productList);
  
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);


    useEffect(() => {
      getProducts();
    }, []);
    
    const getProducts = async () => {
        const data = await fetch("https://dummyjson.com/docs/products");
        const json = await data.json();
        setProducts(json.products);
        setFilteredProducts(json.products);
      }


      function filterData(searchTerm, products) {
        const filterData = products.filter((product) => 
        product.item.toLowerCase.includes(searchTerm.toLowerCase())        
        );
        return filterData; 
      }
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button className="text-white mr-4">
           LOGO
          </button>
        </div>

        
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-4 py-2 w-[500px] rounded-md hidden md:block"
          />
           <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => {
            const data = filterData(searchTerm, products);
            setFilteredProducts(data);
          }}
          >
            Search
          </button>
          </div>
          <div className='flex gap-4'>
          <button className="text-white px-4  rounded-md border border-white hidden md:block bg-blue-800 hover:bg-blue-900">
            <Link to="/login">Login</Link>
          </button>

          <div className="text-white px-4 py-2 rounded-md border border-white hidden md:block">
          <FaShoppingCart  className='text-4xl '/>
          <ul className='px-auto'>Cart - {cartItems.length} Items</ul>
          </div>
      </div>

          <button className="text-white md:hidden">
            Menu
          </button>
        </div>
      </nav>
    );
  }

export default Header;