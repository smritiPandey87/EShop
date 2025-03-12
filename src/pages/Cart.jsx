import React from 'react'
import { useSelector } from 'react-redux'
import { FaTrashCanArrowUp } from "react-icons/fa6";

export default function Cart() {
    const cart = useSelector(state=>state.Cart)
  return (
    <div>
        <h1>Cart</h1>
        {cart.products.length>0 ?
       <div>
         <div>
            <div>
                <p>products</p>
            </div>
             
             <div>
                <p>price</p>
                <p>quantity</p>
                <p>sub total</p>
                <p>Remove</p>
             </div>
        </div>
        <div>
            {cart.products.map((products)=>(
                <div>
                    <div>

                        <img src='product.img'/>
                    <div>
                        <h3>{products.name}</h3>
                    </div>
                    </div>
                    <div>
                        <p>Rs{products.price}</p>
                        <div>
                            <button>-</button>
                            <p>{products.quantity}</p>
                            <button>+</button>
                            </div>
                            <p>Rs{products.quantity*products.price}</p>
                            <button><FaTrashCanArrowUp /></button>
                    </div>
                </div>
            ))}
        </div>
        <div>
           <h3>CARTS TOTALS</h3>
           <div>
            <p>TOTAL ITEMS</p>
            <p>{products.quantity}</p>
           </div>
           {/* lining  */}
           <div></div>
          <div>
            <p>Total Price</p>
            <p>Rs{products.quantity*products.price}</p>
          </div>
        </div>
        <button>Proceed to checkout </button>
       </div>
        :<div></div>}

    </div>

  )
}
