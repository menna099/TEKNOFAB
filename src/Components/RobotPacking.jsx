import React, { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import Robot_One from "../assets/pack_machine_1.webp";

export default function RobotPacking({ language, setLanguage }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="robotpackingsec py-10 ">
        <div className="px-5 sm:px-8 lg:px-8">
          <div className="services-heading-container mb-10" data-aos="zoom-in">
            <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
              {language === "AR"
                ? ` الحلول `
                : language === "EN"
                ? `Packing Robot `
                : "Çözümlerimiz"}
            </h1>
          </div>
          <div
            className="robot_about mb-10 flex gap-10 items-center w-11/12 m-auto"
            data-aos="zoom-in"
          >
            <div className="robot_desc flex-1" data-aos="zoom-in">
              <h1 className="robot_about_heading font-extrabold text-xl">
                World's Leading
              </h1>
              <h1 className="robot_about_heading font-extrabold text-xl mb-4">
                Robotic Palletizer Manufacturer
              </h1>
              <p className="robot_desc_text leading-7">
                Fuji Robotics is the Worlds Largest Robotic Palletizer
                Manufacturer and has installed 17000 Robotic System. Fuji Yusoki
                Kogyo Co., Ltd, Founded in April 13,1994 and Headquarters at
                Sanyo-Onoda, Yamaguchi Prefecture, Japan. Fuji Robotics is the
                Leading Manufacturer of Automatic & Industrial Robotic
                Palletizer which is used for loading and offloading industrial
                products such as bottles, cartons, boxes, etc. We are the World
                Top Manufacturers of Robotic Palletizer with Energy Saving
                Models such as Low-Medium Robotic Palletizer, High Speed Robotic
                Palletizer, Heavy Payload Robotic Palletizer. Fuji Robotics
                offers a fully automated Robotic System that ensures no human
                contact during the Palletizing Operation. We emphasize a lot on
                the safety of the Robotic palletizer by perfectly using
                automation at all the possible pinch points in the system. The
                smooth handling of the product and efficient stacking of the
                boxes on pallet results in less product damages. While the
                system works in high-speed, high-volume production applications,
                it can make adjustments on the fly, switching seamlessly between
                product types without the need to stop the line to change
                programming.
              </p>
            </div>
            <div className="about_robot_img text-center" data-aos="zoom-in">
              <img src={Robot_One} alt="Robot" className="mx-auto hvr-pop" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}