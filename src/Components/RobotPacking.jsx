import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Icons from "./Icons";
import Footer from "./Footer";
import AOS from "aos";
import video1 from "../assets/Video1.mp4";
import video2 from "../assets/Video2.mp4";
import video3 from "../assets/Video3.mp4";
import packingrobot from "../assets/packingrobot.png";
import { VscSend } from "react-icons/vsc";

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
            className="robot_about mb-10 w-11/12 m-auto"
            data-aos="zoom-in"
          >
            <div className="" data-aos="zoom-in">
              <h1 className="text-green-700 font-extrabold text-xl mb-5 text-left">
                Custom-Robotic Solutions
              </h1>

              <ul className="ml-5">
                <div className="flex items-center gap-2 mb-3"><VscSend /><li>Cost Effective & Space Saving</li></div>
                <div className="flex items-center gap-2"><VscSend /><li>Applicable for different product shape</li></div>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
              <div className="mx-auto sm:w-1/2 w-full" data-aos="zoom-in">
                <video controls loop>
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
              <div className="mx-auto sm:w-1/2 w-full" data-aos="zoom-in">
                <video controls loop>
                  <source src={video2} type="video/mp4" />
                </video>
              </div>
            </div>

          </div>
          {/*  */}
          <div
            className=" mb-10 flex flex-col sm:flex-row items-center justify-center w-11/12 m-auto"
            data-aos="zoom-in"
          >
            <div className="" data-aos="zoom-in">
              <h1 className="text-green-700 font-extrabold text-xl mb-5 text-left">
                Delta Robot for Pick and Place
              </h1>
              <p className="mb-3 text-left">High Speed Case Packer</p>
              <ul className="ml-5">
                <div className="flex items-center gap-2 mb-3"><VscSend /><li>With Delta Robot up to <strong>120PPM</strong>
                </li></div>
                <div className="flex items-center gap-2 mb-3"><VscSend /><li>With Multi Robot can maximize the speed
                </li></div>
                <div className="flex items-center gap-2"><VscSend /><li>Optional for different bag styles/orientations
                </li></div>
              </ul>
              <p className="mt-3 text-left">It is an excellent solution for your end-of-line automation</p>
              <div className="sm:w-3/4 w-full mt-3" data-aos="zoom-in">
                <video controls loop>
                  <source src={video3} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="about_robot_img text-center" data-aos="zoom-in">
              <img src={packingrobot} alt="Robot" className="w-full sm:w-3/4 md:w-3/4 hvr-pop rounded-lg" />
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <Footer />
      <Icons />
    </>
  );
}