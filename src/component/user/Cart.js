import React from 'react';
import { useAppContext } from '../ContextApi';

const Cart = () => {
  const { appState, updateState } = useAppContext();

  const handleIncrease = (itemId) => {
    const updatedCart = appState.cart.map(item =>
      item.id === itemId ? { ...item, count: (item.count || 0) + 1 } : item
    );
    updateState({ cart: updatedCart });
  };

  const handleDecrease = (itemId) => {
    const updatedCart = appState.cart.map(item =>
      item.id === itemId ? { ...item, count: Math.max((item.count || 0) - 1, 0) } : item
    );
    updateState({ cart: updatedCart });
  };

  // Filter out products with count less than 1
  const filteredCart = appState.cart.filter(item => item.count >= 1);

  return (
    <div className='w-screen h-screen'>
      <div className="flex flex-wrap mx-20 px-20 w-full justify-center">
        <div className='flex gap-80'>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </div>
        {filteredCart.map((item, index) => (
          <div key={index} className="w-full px-4 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4 mr-2 flex">
              <div>
                <img src={item.images} alt={item.name} className="w-52 h-52" />
                <h2 className="text-lg font-semibold mb-2">Name: {item.name}</h2>
                <button className='bg-orange-200 w-32'>BUY NOW</button>
              </div>
              <div className='flex pl-3 ml-24 w-3/4 h-1/4 items-center justify-center gap-72'>
                <div>
                  <p className="text-green-600 font-semibold">Old Price: {item.oldPrice}</p>
                  <p className="text-green-600 font-semibold">Discount: {((item.oldPrice-item.price)/item.oldPrice)*100}% OFF</p>
                  <p className="text-green-600 font-semibold">Price: {item.price}</p>
                </div>
                <div className='flex gap-4'>
                  <button className='text-3xl' onClick={() => handleIncrease(item.id)}>+</button>
                  <span className='text-5xl'>{item.count}</span>
                  <button className='text-3xl' onClick={() => handleDecrease(item.id)}>-</button>
                </div>
                <p className="text-green-600 font-semibold">Price: {item.price*item.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
