import React from 'react';
import {useNavigate} from 'react-router-dom'

const TrendingProducts = ({ title, data }) => {
  const navigate=useNavigate()
  const handleDetail=()=>{
    navigate("/Details")
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap ">
        {data.map((item) => (
          <div key={item.id} onClick ={handleDetail}className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-4">
                <img src={item.images} alt={item.name} className="w-14 h-14 object-cover" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-gray-700 mb-2">{item.brand}</p>
                  <p className="text-green-600 font-semibold">{item.price}</p>
                </div>
              </div>
              <button className='bg-black rounded-lg shadow-md w-full text-white'>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingProducts;
