import React from "react";
import Slider from "react-slick";
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.gif'
import icon3 from '../assets/icon3.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className="slider-container my-10 p-5 ">
            <Slider {...settings}>

                <div className="p-3 bg-[#fef5f5]">
                    <img className="mb-3" src={icon1} alt="" />
                    <h3 className=" ">"Books are windows to new worlds, offering endless adventures and discoveries with every page turned."</h3>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <img src={icon3} alt="" />
                </div>

                <div className="p-3 bg-[#f5f7fe]">
                    <img className="mb-3" src={icon2} alt="" />
                    <h2 className=" ">"In the quiet embrace of a book, we find solace, wisdom, and the beauty of countless untold stories waiting to be explored."</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <img src={icon3} alt="" />

                </div>

                <div className="p-3 bg-[#e9f7fa]">
                    <img className="mb-3" src={icon1} alt="" />
                    <h2 className=" ">"From the comforting scent of well-worn pages to the excitement of uncovering hidden gems, books have a magic all their own."</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <img src={icon3} alt="" />


                </div>


                <div className="p-3 bg-[#f4fbf2]">
                    <img className="mb-3" src={icon2} alt="" />
                    <h2 className=" ">"In a world filled with noise and distraction, books are quiet companions, offering refuge and inspiration to those who seek them."</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <img src={icon3} alt="" />

                </div>

            </Slider>
        </div>
    );
};

export default HomeSlider;