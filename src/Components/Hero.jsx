import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image from "../assets/Teknofab-End-of-line.jpg";

export default function Hero() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    src={image}
                    alt="Slide 1"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    src={image}
                    alt="Slide 2"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="object-fill w-full h-96"
                    src={image}
                    alt="Slide 3"
                />
            </SwiperSlide>
        </Swiper>
    );
}
