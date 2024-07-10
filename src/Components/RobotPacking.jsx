import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import image from "../assets/ec171.webp";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Footer";
import Icons from "./Icons";

const data = [
    {
        name: `High Speed Robotic Palletizer`,
        title: "EC-201",
        img: `https://fujiroboticsindia.com/assets/img/EC-201.webp`,
        desc: `The award-winning EC-201 model is the top-of-the-line robot in the FUJI-ACE line and one of the highest-performance, most technologically advanced, robotic palletizer on the market today. It is particularly well-suited to high-speed sack or beverage case palletizing lines.`
    },
    {
        name: `Heavy Payload Robotic Palletizer`,
        title: "EC-201W",
        img: `https://fujiroboticsindia.com/assets/img/EC-102.webp`,
        desc: `The Robotic Palletizer EC-201W is a Heavy Payload Robotic Palletizer & one of the most technologically advanced Robotic Palletizer in the market today. With three EC-201W models to choose from. Fuji Robotics offers a solution for High Speed Robotic Palletizer(HS) , Heavy Weight Robotic Palletizer(HD) and/or Super Heavy Weight Robotic Palletizer(W) applications.`
    },
    {
        name: `Low to Medium Speed Robotic Palletizer`,
        title: "EC-102",
        img: `https://fujiroboticsindia.com/assets/img/EC-201.webp`,
        desc: `The EC-102 model is one of our most energy-efficient robotic palletizers,
                                                as it uses only 3.5 KVA. Given the cycle rate-to-power ratio, it
                                                provides the most cost-effective, technically capable solution for
                                                moderate production throughput lines.`
    },
    {
        name: `Medium to High Speed Robotic Palletizer`,
        title: "EC-171",
        img: "https://fujiroboticsindia.com/assets/img/EC-201.webp",
        desc: `Featuring the largest working envelope of all models, while allowing more
                                                compact layouts and high palletizing rates very energy-efficiently, as
                                                it uses only 4 KVA, the EC-171 is ideal for most palletizing
                                                applications and the most popular in the FUJI-ACE line.`
    },

];

function RobotPacking({ language, setLanguage }) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <Navbar language={language} setLanguage={setLanguage} />
            <div className=" py-10">
        <div className="px-2 sm:px-6 lg:px-8" >
            
                <div className="robot-heading-container mb-10" data-aos="zoom-in">
                    <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
                    Palletizing Robots
                    </h1>
                </div>
                <div className="mt-6 sm:mt-10">
                        <div className="grid gird-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col justify-between" data-aos="zoom-in">
                                    <p className="mt-3 text-gray-500 text-sm leading-6 text-justify sm:text-left sm:mt-4">
                                    Fuji Robotics is the Worlds Largest Robotic Palletizer Manufacturer and has installed 17000 Robotic System. Fuji Yusoki Kogyo Co., Ltd, Founded in April 13,1994 and Headquarters at Sanyo-Onoda, Yamaguchi Prefecture, Japan.
                            Fuji Robotics is the Leading Manufacturer of Automatic & Industrial Robotic Palletizer which is used for loading and offloading industrial products such as bottles, cartons, boxes, etc. We are the World Top Manufacturers of Robotic Palletizer with Energy Saving Models such as Low-Medium Robotic Palletizer, High Speed Robotic Palletizer, Heavy Payload Robotic Palletizer.
                            Fuji Robotics offers a fully automated Robotic System that ensures no human contact during the Palletizing Operation. We emphasize a lot on the safety of the Robotic palletizer by perfectly using automation at all the possible pinch points in the system. The smooth handling of the product and efficient stacking of the boxes on pallet results in less product damages. While the system works in high-speed, high-volume production applications, it can make adjustments on the fly, switching seamlessly between product types without the need to stop the line to change programming.
                                    </p>
                            </div>
                            <div className="overflow-hidden rounded-xl" data-aos="zoom-in">
                                <img
                                    src={image}
                                    alt="Product-Image"
                                    className="w-48 h-48"
                                />
                            </div>
                        </div>
                </div>
                {/* <div className="about-content lg:columns-2">

                    <div className="mt-10 " data-aos="zoom-in">
                        <p className="text-black">
                            Fuji Robotics is the Worlds Largest Robotic Palletizer Manufacturer and has installed 17000 Robotic System. Fuji Yusoki Kogyo Co., Ltd, Founded in April 13,1994 and Headquarters at Sanyo-Onoda, Yamaguchi Prefecture, Japan.
                            Fuji Robotics is the Leading Manufacturer of Automatic & Industrial Robotic Palletizer which is used for loading and offloading industrial products such as bottles, cartons, boxes, etc. We are the World Top Manufacturers of Robotic Palletizer with Energy Saving Models such as Low-Medium Robotic Palletizer, High Speed Robotic Palletizer, Heavy Payload Robotic Palletizer.
                            Fuji Robotics offers a fully automated Robotic System that ensures no human contact during the Palletizing Operation. We emphasize a lot on the safety of the Robotic palletizer by perfectly using automation at all the possible pinch points in the system. The smooth handling of the product and efficient stacking of the boxes on pallet results in less product damages. While the system works in high-speed, high-volume production applications, it can make adjustments on the fly, switching seamlessly between product types without the need to stop the line to change programming.
                        </p>
                    </div>
                    <img src={image} alt="img" data-aos="zoom-in" className="h-80 rounded-lg" />
                </div> */}
            </div>
            </div>
           
            {/* cards */}
            <div className='w-3/4 m-auto' data-aos="zoom-in">
                <div className="mt-20">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <Link to="/products-details" key={d.name} className="bg-white text-black rounded-xl">
                                <div className='h-56 flex justify-center items-center'>
                                    <img src={d.img} alt="" className="h-48 w-48 rounded-full" />
                                </div>

                                <div className="flex flex-col  justify-center gap-3 p-4">
                                    <p className="text-sm text-center">{d.name}</p>
                                    <h4 className="text-xl font-bold text-center">{d.title}</h4>
                                    <p className="text-sm text-gray-500 ">{d.desc}</p>
                                    <Link to="/products-details" className='hvr-forward text-SecondColor text-sm'>Read More</Link>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* End Effectors */}
            <div className="mt-10">
                <div className="p-5 pb-10 bg-gray-300">
                    <div className="robot-heading-container mb-10" data-aos="zoom-in">
                        <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
                            End Effectors
                        </h1>
                    </div>
                    <p
                        className="robot-video-desc text-black text-center mb-10"
                        data-aos="zoom-in"
                    >
                        We understand how End Effectors play an intricate role in successful robotic palletizing applications. Given this critical point, we have spent years developing and refining high quality and cost effective End Effectors. Below is a small example of our End Effector designs.
                    </p>
                    <div className="flex gap-5 justify-center items-center flex-wrap" data-aos="zoom-in">
                        <div className="flex flex-col gap-5 rounded-lg bg-white p-5 items-center w-60">
                            <img src="https://fujiroboticsindia.com/assets/img/Bag-End-Effector.webp" alt="" className="h-32 w-32" />
                            <h4>Bag End Effector</h4>
                        </div>

                        <div className="flex flex-col gap-5 rounded-lg bg-white p-5 items-center w-60">
                            <img src="https://fujiroboticsindia.com/assets/img/Case-End-Effector.webp" alt="" className="h-32 w-32" />
                            <h4>Case End Effector</h4>
                        </div>

                        <div className="flex flex-col gap-5 rounded-lg bg-white p-5 items-center w-60">
                            <img src="https://fujiroboticsindia.com/assets/img/Vacuum-End-Effector.webp" alt="" className="h-32 w-32" />
                            <h4>Vacuum End Effector</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Icons />
        </>
    );
}

export default RobotPacking;