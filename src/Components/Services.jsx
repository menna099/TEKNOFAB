import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import topleader from "../assets/top leader.png";
import Robot_One from "../assets/Robot_1.webp";
import Robotic_Packing from '../assets/Robotic-packing.png'
import weight from '../assets/weight.jpg'

export default function Services({ language }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="services py-10 ">
        <div className="px-5 sm:px-8 lg:px-8">
          <div className="services-heading-container mb-10" data-aos="zoom-in">
            <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
              {language === "AR"
                ? ` الحلول `
                : language === "EN"
                ? `Our Solutions`
                : "Çözümlerimiz"}
            </h1>
          </div>
          <p
            className="services-desc text-white text-center w-11/12 m-auto"
            data-aos="zoom-in"
          >
            {language === "AR"
              ? ` نحن نهتم دائمًا بأعمال عملائنا ، فنحن نقدم خدمة عالية الجودة وأفضل الحلول لنشاطك التجاري. بفضل أحدث التقنيات وأتمتة عمليات التطوير ، نحن نقدم سرعة ونوعية التطوير. `
              : language === "EN"
              ? `We always care about our customers' business, we provide quality service and the best solutions for your business. Thanks to the latest technology and automation of development processes, we offer the speed and quality of development.`
              : "Müşterilerimizin işini her zaman önemsiyor, kaliteli hizmet ve işletmeniz için en iyi çözümleri sunuyoruz. En son teknoloji ve geliştirme süreçlerinin otomasyonu sayesinde, geliştirmenin hızını ve kalitesini sunuyoruz."}
          </p>
          <div className="services-items lg:columns-2 space-y-5 gap-5 text-center mt-10 w-11/12 m-auto">
            <div className="block rounded-lg hvr-float shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
              <Link to="/case-packer">
                <div className="relative overflow-hidden bg-cover bg-no-repeat hvr-float w-full">
                  <img
                    className="bg-white rounded-t-lg  h-96 block w-full"
                    src={topleader}
                    alt=""
                  />
                  <p className="text-white bg-black py-5 text-left pl-5 rounded-b-lg">
                    Top Load Case Packer
                  </p>
                </div>
              </Link>
            </div>
            <div className="block rounded-lg hvr-float shadow-secondary-1  dark:bg-surface-dark dark:text-white text-surface">
              <Link to="/robot-palletizers">
                <div className="relative overflow-hidden bg-cover bg-no-repeat  w-full">
                  <img
                    className=" rounded-t-lg bg-white h-96 w-full"
                    src={Robot_One}
                    alt=""
                  />
                  <p className="text-white bg-black py-5 text-left pl-5 rounded-b-lg">
                    Robot Palletizers
                  </p>
                </div>
              </Link>
            </div>
            <div className="block rounded-lg shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface hvr-float">
              <Link to="/robot-packing">
                <div className="relative overflow-hidden bg-cover bg-no-repeat w-full">
                  <img
                    className="rounded-t-lg h-96 w-full"
                    src={Robotic_Packing}
                    alt=""
                  />
                  <p className="text-white bg-black py-5 text-left pl-5 rounded-b-lg">
                     Packing Robot
                  </p>
                </div>
              </Link>
            </div>
            <div className="block rounded-lg  shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface hvr-float">
              <Link to="/packing-machines">
                <div className="relative overflow-hidden bg-cover bg-no-repeat hvr-float w-full">
                  <img
                    className="rounded-t-lg h-96 w-full"
                    src={weight}
                    alt=""
                  />
                  <p className="text-white bg-black py-5 text-left pl-5 rounded-b-lg">
                    Checkweigher Conveyor
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
