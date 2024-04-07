import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";

const PremiumProducts = ({ title, data }) => {
  const navigate = useNavigate();

  const handleDetail=()=>{
    navigate("/Details")
  }

  const handleClick = () => {
    navigate("/cart");
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} onClick ={handleDetail} className="px-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-center items-center mb-4">
                <img src={item.images} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
              </div>
              <button onClick={handleClick} className='bg-black w-full rounded-lg shadow-md text-white'>ADD TO CART</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PremiumProducts;
