import React, { useEffect, useState } from "react";
import Productcard from "../components/Productcard.jsx";

export default function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchingData();
  }, []);
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
      <h className="text-5xl font-bold text-red-600">Shop</h>
      <div className=" mt-12 flex  flex-wrap gap-5">
        {products.map((Val,idx)=>(
          <Productcard key={idx} img={Val.images[0]} title={Val.title} price={Val.price} rate={Val.rating}/>
          
        )
      )}
      </div>
    </div>

  )
  

}
