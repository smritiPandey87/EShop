import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";


export default function Productcard({img,title,price,rate}) {
    const floorVal= Math.floor(rate)
    const starArr=[]
    for(let i=0;i<floorVal;i++){
     starArr.push(<IoStarSharp/>)
    }
  return (
    <div>                 
        <img src = {img} />
        <div>
            <div>
                <p>{title} </p>
                <p>{price*87}</p>
                <p >{
                    starArr
                    }</p>
               
            </div>
         <button><CiCirclePlus/></button>

        
        </div>
    </div>
  )
}
 
