import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';


const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProduct] = useState([]);


    useEffect(() => {
      getProducts();
    }, []);
    
    const getProducts = async () => {
        const data = await fetch("https://dummyjson.com/docs/products");
        const json = await data.json();
        console.log("json",json);
        setProduct(json?.products);
        setFilteredProducts(json?.products);
      }



    const filterData = products.filter((product) =>
      product?.info?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
  //   setFilteredProducts(filtered);
  // };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Your Logo</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            className="px-4 py-2 rounded-xl w-96 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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

        <div className='justify-end -mx-56'>
          <FaShoppingCart  className='text-4xl '/>
        </div>

        <div>
          <button className='bg-blue-700 p-2 m-1 rounded-xl'>
            <Link to="/login">Login</Link>
          </button>
        </div>

        <div className="flex flex-wrap gap-5 justify-center bg-amber-800"> 
        {filteredProducts.map((product) => {
         
          return (  

          <Link 
          className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]"
          to={"/product/" + product?.info?.id }
          key={product?.info?.id}
>
            <ItemCard key={products.id} info={products}  />
              </Link>
          );
        })}

        </div>
      </div>
    </header>
  );
}

export default Header;
