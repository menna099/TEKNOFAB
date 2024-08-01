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
                ? `We work closely with each client to develop tailored Industry 4.0 automation solutions that include packaging, labeling, and quality control checks before the products are shipped to customers or distribution centers.`
                : "Müşterilerimizin işini her zaman önemsiyor, kaliteli hizmet ve işletmeniz için en iyi çözümleri sunuyoruz. En son teknoloji ve geliştirme süreçlerinin otomasyonu sayesinde, geliştirmenin hızını ve kalitesini sunuyoruz."}
          </p>
          <div className="flex flex-wrap justify-center items-center mt-10 w-11/12 mx-auto">
            <div className="block rounded-lg hvr-float shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface w-full sm:w-1/2 lg:w-1/2 p-2">
              <Link to="/case-packer">
                <div className="relative rounded-t-lg overflow-hidden bg-cover bg-no-repeat hvr-float w-11/12  bg-white">
                  <img
                    className="bg-white rounded-t-lg h-80 block w-8/12 m-auto"
                    src={topleader}
                    alt=""
                  />
                  <p className="text-white bg-black py-5 text-left pl-5 rounded-b-lg">
                    Top Load Case Packer
                  </p>
                </div>
              </Link>
            </div>
            <div className="block rounded-lg hvr-float shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface w-full sm:w-1/2 lg:w-1/2 p-2">
              <Link to="/robot-palletizers">
                <div className="relative overflow-hidden bg-cover bg-no-repeat hvr-float w-11/12">
                  <img
                    className="bg-white rounded-t-lg h-80 block w-full"
                    src={Robot_One}
                    alt=""
                  />
                  <p className="text-white bg-black py-5 text-left pl-5 rounded-b-lg">
                    Robot Palletizers
                  </p>
                </div>
              </Link>
            </div>
            <div className="block rounded-lg hvr-float shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface w-full sm:w-1/2 lg:w-1/2 p-2">
              <Link to="/robot-packing">
                <div className="relative overflow-hidden bg-cover bg-no-repeat hvr-float w-11/12">
                  <img
                    className="bg-white rounded-t-lg h-80 block w-full"
                    src={Robotic_Packing}
                    alt=""
                  />
                  <p className="text-white bg-black py-5 text-left pl-5 rounded-b-lg">
                    Packing Robot
                  </p>
                </div>
              </Link>
            </div>
            <div className="block rounded-lg hvr-float shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface w-full sm:w-1/2 lg:w-1/2 p-2">
              <Link to="/packing-machines" className="m-0">
                <div className="relative overflow-hidden bg-cover bg-no-repeat w-11/12">
                  <img
                    className="rounded-t-lg bg-white h-80 w-full"
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
