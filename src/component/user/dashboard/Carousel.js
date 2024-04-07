import React from "react";
import Slider from "react-slick";

const Carousel = ({ data }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            {data?.map((item) => (
                <div key={item.id}>
                    <div
                        className="h-64 md:h-96 bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${item.images}) `}}
                    >
                        {/* Carousel Image */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <img
                                src={item.images}
                                alt="shoes"
                                className="mx-auto max-h-80 md:max-h-96 max-w-full"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}                                        

export default Carousel;