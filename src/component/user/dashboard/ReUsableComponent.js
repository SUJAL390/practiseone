import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../ContextApi';

const ResUsableComponent = ({ title, data }) => {
  const { appState, updateState } = useAppContext(); // Destructure appState and updateState
  const navigate = useNavigate();

  const handleDetail = (item) => {
    updateState(
      {data:item}
    )
     console.log("appstate",appState)

    navigate('/Details');
  };


const handleCart=(item)=>{
  
  
  updateState({
    
   
    cart:[...new Set(appState.cart),...new Set(item)]
   })
   navigate('/Cart')
  
}



  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap -mx-4">
        {data.map((item) => (
          <div
            key={item.id}
           
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4"
          >
            <div  onClick={() => handleDetail(item)} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-700 mb-2">{item.brand}</p>
              <p className="text-green-600 font-semibold">{item.price}</p>
             
            </div>
            <button onClick={()=>handleCart(item)} className="bg-black w-full rounded-lg shadow-md text-white">
                ADD TO CART
              </button>
          </div>
          

        ))}
        
      </div>
    </div>
  );
};

export default ResUsableComponent;
