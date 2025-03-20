import React, { useEffect, useState } from "react";
import Productcard from "../components/Productcard.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice.jsx";



export default function Shop() {
  const dispatch= useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);
  const handleAddToCart = (product)=> {
    console.log("product",product)
    dispatch(addToCart({id:product.id,name:product.title,image:product.images,price:product.price}))

  }
  
  async function fetchingData() {
    try {
      const data1 = await fetch("https://dummyjson.com/products");
      // console.log("print data1", data1);
      const data2 = await data1.json();
      console.log("print data2.products", data2);
      setProducts(data2.products);

    } catch (err) {
      console.log("error is", err)
    }
  }
  return (

    <div className="m-8 flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold text-red-600">Shop</h1>
      <div className=" mt-12 flex  flex-wrap justify-around gap-4  hover:translate-y-4 ">
        {products.map((Val,idx)=>(
          <Productcard  addToCart={()=>dispatch(addToCart({id:Val.id,name:Val.title,price:Val.price,image:Val.images[0]}))}
          key={idx} img={Val.images[0]} title={Val.title} price={Val.price} rate={Val.rating} id={Val.id}/>
          
        )
      )}
      </div>
    </div>

  )
  

}
