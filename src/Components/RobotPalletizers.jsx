import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Icons from "./Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Robot_One from "../assets/Robot_1.webp";
import Robot_Two from "../assets/Robot_2.webp";
import Robot_Three from "../assets/Robot_3.webp";
import Robot_Four from "../assets/Robot_4.png";
import { Link } from "react-router-dom";

export default function RobotPalletizers({ language, setLanguage }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        767:{
            items:2,
            nav:true
        },
        1300:{
            items:3,
            nav:true,
            loop:true
        }
    }
      });
    });
  }, []);

  return (
    <Fragment>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="robot_palletizers py-10">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="robot-heading-container mb-10" data-aos="zoom-in">
            <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
              {language === "AR"
                ? `روبوتات منصات نقالة`
                : language === "EN"
                ? `Palletizing Robots`
                : "Paletleme Robotları"}
            </h1>
          </div>
          <div className="robot_about mb-10 flex gap-10 items-center" data-aos="zoom-in">
            <div className="robot_desc flex-1" data-aos="zoom-in">
              <h1 className="robot_about_heading font-extrabold text-xl">World's Leading</h1>
              <h1 className="robot_about_heading font-extrabold text-xl mb-4">Robotic Palletizer Manufacturer</h1>
              <p className="robot_desc_text leading-7">
              Fuji Robotics is the Worlds Largest Robotic Palletizer Manufacturer and has installed 17000 Robotic System. Fuji Yusoki Kogyo Co., Ltd, Founded in April 13,1994 and Headquarters at Sanyo-Onoda, Yamaguchi Prefecture, Japan.
Fuji Robotics is the Leading Manufacturer of Automatic & Industrial Robotic Palletizer which is used for loading and offloading industrial products such as bottles, cartons, boxes, etc. We are the World Top Manufacturers of Robotic Palletizer with Energy Saving Models such as Low-Medium Robotic Palletizer, High Speed Robotic Palletizer, Heavy Payload Robotic Palletizer.
Fuji Robotics offers a fully automated Robotic System that ensures no human contact during the Palletizing Operation. We emphasize a lot on the safety of the Robotic palletizer by perfectly using automation at all the possible pinch points in the system. The smooth handling of the product and efficient stacking of the boxes on pallet results in less product damages. While the system works in high-speed, high-volume production applications, it can make adjustments on the fly, switching seamlessly between product types without the need to stop the line to change programming.
              </p>
            </div>
            <div className="about_robot_img text-center" data-aos="zoom-in">
              <img src={Robot_One} alt="Robot" className="mx-auto hvr-pop" />
            </div>
            </div>                
          <div className="robots_palletizers_container owl-carousel" data-aos="zoom-in" dir={
                language === "en" ? "ltr" : "ltr"
            } >
            <div
              className="robot_item p-5 rounded-lg text-center mb-5"
              data-aos="zoom-in"
            >
              <img src={Robot_One} alt="robot_1" data-aos="zoom-in" />
              <div className="robot_item_desc" data-aos="zoom-in">
              <h4 className="robot_item_title text-black mb-2 font-extrabold">
              Low to Medium  Speed Robotic Palletizer
                </h4>
                <h1 className="robot_item_heading text-black mb-3 font-extrabold">
                  EC-102
                </h1>
                <p className="robot_item_text text-gray-700 mb-3">
                  {language === "AR"
                    ? `أحدث روبوت لدينا وأكثرها كفاءة ، EC-102 موجه لخطوط الإنتاج حيث تكون المساحة ضيقة أو بسرعات إخراج منخفضة إلى متوسطة.`
                    : language === "EN"
                    ? `The EC-102 model is one of our most energy-efficient robotic palletizers, as it uses only 3.5 KVA. Given the cycle rate-to-power ratio, it provides the most cost-effective, technically capable solution for moderate production throughput lines.`
                    : "En yeni ve en verimli robotumuz olan EC-102, alanın dar olduğu veya düşük-orta çıkış hızlarına sahip ürün serileri için tasarlanmıştır."}
                </p>
              </div>

              <div className="robot_item_overlay rounded-lg">
                <Link
                  className="robot_item_btn p-3 rounded-lg font-bold hvr-pulse"
                  to="/products-details"
                  target="_blank"
                >
                  {language === "AR"
                    ? `أقرأ المزيد`
                    : language === "EN"
                    ? `Read More`
                    : "Teknik Özellikler"}
                </Link>
              </div>
            </div>
            <div
              className="robot_item p-5 rounded-lg text-center mb-5"
              data-aos="zoom-in"
            >
              <img src={Robot_Two} alt="robot_2" data-aos="zoom-in" />
              <div className="robot_item_desc" data-aos="zoom-in">
              <h4 className="robot_item_title text-black mb-2 font-extrabold">
              Medium to High Speed Robotic Palletizer
                </h4>
                <h1 className="robot_item_heading text-black mb-3 font-extrabold">
                  EC-171
                </h1>
                <p className="robot_item_text text-gray-700 mb-3">
                  {language === "AR"
                    ? `يحتوي EC-171 على أكبر غلاف عمل وهو مصمم للعمليات ذات الإخراج المتوسط والتخطيطات التي تتطلب مدى أبعد.`
                    : language === "EN"
                    ? `Featuring the largest working envelope of all models, while allowing more compact layouts and high palletizing rates very energy-efficiently, as it uses only 4 KVA, the EC-171 is ideal for most palletizing applications and the most popular in the FUJI-ACE line.`
                    : "EC-171 en büyük çalışma zarfına sahiptir ve orta çıktılı operasyonlar ve daha uzak erişim gerektiren düzenler için yapılmıştır."}
                </p>
              </div>

              <div className="robot_item_overlay rounded-lg">
                <Link
                  className="robot_item_btn p-3 rounded-lg font-bold hvr-pulse"
                  to="/products-details"
                  target="_blank"
                >
                  {language === "AR"
                    ? `أقرأ المزيد`
                    : language === "EN"
                    ? `Read More`
                    : "Teknik Özellikler"}
                </Link>
              </div>
            </div>
            <div
              className="robot_item p-5 rounded-lg text-center"
              data-aos="zoom-in"
            >
              <img src={Robot_Three} alt="robot_3" data-aos="zoom-in" />
              <div className="robot_item_desc" data-aos="zoom-in">
              <h4 className="robot_item_title text-black mb-2 font-extrabold">
              High Speed Robotic Palletizer
                </h4>
                <h1 className="robot_item_heading text-black mb-3 font-extrabold">
                  EC-201
                </h1>
                <p className="robot_item_text text-gray-700 mb-3">
                  {language === "AR"
                    ? `EC-201 هو أسرع وأقوى طراز في فوجي.  مثالي للمرافق عالية الإنتاج أو المنتجات الثقيلة.`
                    : language === "EN"
                    ? `The award-winning EC-201 model is the top-of-the-line robot in the FUJI-ACE line and one of the highest-performance, most technologically advanced, robotic palletizer on the market today. It is particularly well-suited to high-speed sack or beverage case palletizing lines. `
                    : "EC-201, Fuji'nin en hızlı ve en güçlü modelidir.  Yüksek verimli tesisler veya daha ağır ürünler için mükemmeldir."}
                </p>
              </div>

              <div className="robot_item_overlay rounded-lg">
                <Link
                  className="robot_item_btn p-3 rounded-lg font-bold hvr-pulse"
                  to="/products-details"
                  target="_blank"
                >
                  {language === "AR"
                    ? `أقرأ المزيد`
                    : language === "EN"
                    ? `Read More`
                    : "Teknik Özellikler"}
                </Link>
              </div>
            </div>
            <div
              className="robot_item p-5 rounded-lg text-center"
              data-aos="zoom-in"
            >
              <img src={Robot_Four} alt="robot_3" data-aos="zoom-in" />
              <div className="robot_item_desc" data-aos="zoom-in">
              <h4 className="robot_item_title text-black mb-2 font-extrabold">
              Heavy Payload Robotic Palletizer
                </h4>
                <h1 className="robot_item_heading text-black mb-3 font-extrabold">
                  EC-201W
                </h1>
                <p className="robot_item_text text-gray-700 mb-3">
                  {language === "AR"
                    ? `EC-201 هو أسرع وأقوى طراز في فوجي.  مثالي للمرافق عالية الإنتاج أو المنتجات الثقيلة.`
                    : language === "EN"
                    ? `The Robotic Palletizer EC-201W is a Heavy Payload Robotic Palletizer & one of the most technologically
                                            advanced Robotic Palletizer in the market today. With three EC-201W models to choose from. Fuji Robotics
                                            offers a solution for High Speed Robotic Palletizer(HS) , Heavy Weight Robotic Palletizer(HD) and/or Super
                                            Heavy Weight Robotic Palletizer(W) applications.`
                    : "EC-201, Fuji'nin en hızlı ve en güçlü modelidir.  Yüksek verimli tesisler veya daha ağır ürünler için mükemmeldir."}
                </p>
              </div>

              <div className="robot_item_overlay rounded-lg">
                <Link
                  className="robot_item_btn p-3 rounded-lg font-bold hvr-pulse"
                  to="/products-details"
                  target="_blank"
                >
                  {language === "AR"
                    ? `أقرأ المزيد`
                    : language === "EN"
                    ? `Read More`
                    : "Teknik Özellikler"}
                </Link>
              </div>
            </div>
          </div>
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
                            <img src="https://fujiroboticsindia.com/assets/img/Bag-End-Effector.webp" alt="" className="h-32 w-32 hvr-pop" />
                            <h4 className="text-SecondColor font-extrabold">Bag End Effector</h4>
                        </div>

                        <div className="flex flex-col gap-5 rounded-lg bg-white p-5 items-center w-60">
                            <img src="https://fujiroboticsindia.com/assets/img/Case-End-Effector.webp" alt="" className="h-32 w-32 hvr-pop" />
                            <h4 className="text-SecondColor font-extrabold">Case End Effector</h4>
                        </div>

                        <div className="flex flex-col gap-5 rounded-lg bg-white p-5 items-center w-60">
                            <img src="https://fujiroboticsindia.com/assets/img/Vacuum-End-Effector.webp" alt="" className="h-32 w-32 hvr-pop" />
                            <h4 className="text-SecondColor font-extrabold">Vacuum End Effector</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
      <Icons />
    </Fragment>
  );
}