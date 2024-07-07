import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image from "../assets/Teknofab-End-of-line.jpg";

export default function Hero({language}) {

    

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            dir={
                language === "en" ? "ltr" : "ltr"
            }
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper py-10"
            
        >
            <SwiperSlide>
                <img
                    className="object-fill  w-3/4  mx-auto rounded-lg"
                    src={image}
                    alt="Slide 1"
                    data-aos="zoom-in"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill  w-3/4  mx-auto rounded-lg"
                    src={image}
                    alt="Slide 2"
                    data-aos="zoom-in"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-3/4  mx-auto rounded-lg"
                    src={image}
                    alt="Slide 3"
                    data-aos="zoom-in"
                />
            </SwiperSlide>
        </Swiper>
    );
}
