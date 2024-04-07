import React, { useState } from "react";
import { useAppContext } from "../ContextApi";
import { Rate } from "antd";

import{useNavigate} from 'react-router-dom'

const Details = () => {
  const { appState ,updateState} = useAppContext();
  

  // Destructure product details from appState.data
 
  const navigate=useNavigate()
  const handleCart = () => {
    const newItem = appState.data; // Assuming appState.data contains the item details
    updateState({
        cart: [...new Set([...appState.cart,  {...newItem ,count:1}])]
    });
    navigate('/Cart');
};

  console.log("appdetail",appState)
  
  const {
    oldPrice,
    name,
    category,
    company,
    price,
    description,
    images,
    rating,
  } = appState.data;


  console.log("related", appState.data);

  console.log("app", appState);

  return (
    <div className="w-screen h-screen flex ">
      <div className="w-1/2 h-full flex justify-center items-center flex-col rounded-lg shadow-md bg-gray-[50]">
        <img className="w-1/2" src={images} alt="shoe" />
        <div className="flex gap-10">
          <button onClick={handleCart} className=" bg-orange-300  rounded-sm text-white text-2xl ">ADD TO CART</button>
          <button className=" bg-red-300  rounded-sm text-white text-2xl  ">BUY NOW</button>
        </div>
      </div>
      <div className="w-1/2 h-full flex  justify-center gap-10 items-start flex-col rounded-lg shadow-md bg-gray-[50]">
        <p>name:{name}</p>
        <p>category:{category}</p>
        <p>rating:{rating}</p>
        <div className="flex">
    <p className="mr-4 line-through">oldPrice: {oldPrice}</p>
    <p className="mr-4">price: {price}</p>
    <p className="text-numberFormat">
        discount: {(((oldPrice - price) / oldPrice) * 100).toFixed(0)} % off
    </p>
</div>

        <p>company:{company}</p>
        <p>description:{description}</p>
      </div>
   
    </div>
  );
};

export default Details;
