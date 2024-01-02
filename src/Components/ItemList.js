import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';

const ItemList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  async function getProducts() {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    console.log(json.products);
    setProduct(json.products);
  }
  return (
    <div className=' flex flex-wrap gap-4'>
      {products.map(products => <ItemCard key={products.id} info={products} />)}
      </div>
  )
}

export default ItemList