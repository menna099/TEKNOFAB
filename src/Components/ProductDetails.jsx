import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import image from "../assets/Robot_2.webp"
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Icons from "./Icons";

export default function ProductDetails({ language, setLanguage }) {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [isTableVisible, setIsTableVisible] = useState(false);

    const handleClick = () => {
        setIsTableVisible(!isTableVisible);
    };
    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <Navbar language={language} setLanguage={setLanguage} />
            <div className="p-3 max-w-7xl m-auto mt-5">
                <div className="robot-heading-container mb-10" data-aos="zoom-in">
                    <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
                        Products
                    </h1>
                </div>
                <div className=" about-content lg:columns-2 mt-10" data-aos="zoom-in">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src={image}
                            alt="Product-Image"
                            className="h-80"
                        />
                    </div>
                    <div className="mt-5">
                        <h2 className="text-gray-500 font-bold text-2xl ">EC-171 (Medium to High Speed Robotic Palletizer)</h2>
                        <p className="mt-3 text-gray-600 text-xl leading-6 text-justify sm:text-left sm:mt-4">
                            The EC.171 robot has the largest working envelope of all Fuji Robots while maintaining the smallest rotation radius. The EC.171 is energy efficient using only 0 kva while still allowing the robot to work in tight space conditions and accomplishing a very high palletizing rate.
                        </p>
                        <div className="mt-5">
                            <Link to="/contact">
                                <button
                                    className=" py-3 px-4 bg-SecondColor text-white text-md rounded-full hover:bg-white hover:text-black hvr-grow">
                                    Enquire Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-10 pb-5">
                <table className="w-3/4 m-auto bg-gray-300">
                    <thead>
                        <tr onClick={handleClick}>
                            <th className="border border-black p-4 text-left text-xl cursor-grab text-gray-600 flex justify-between">
                             EC-171 Series Technical Specifications
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    {isTableVisible ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    )}
                                </svg>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className={`relative overflow-x-auto pt-1 pb-3 ${isTableVisible ? 'block' : 'hidden'}`}>
                <table className="mx-auto w-3/4 text-sm text-left rtl:text-right border-collapse">
                    <thead className="text-xl bg-white dark:bg-SecondColor dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 border border-slate-600">
                                Fuji ACE Model
                            </th>
                            <th scope="col" className="px-6 py-3 border border-slate-600">
                                EC-171HS
                            </th>
                            <th scope="col" className="px-6 py-3 border border-slate-600">
                                EC-171HD
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 border border-slate-600 text-black">
                                Type of Motion
                            </td>
                            <td className="px-6 py-3 text-center border border-slate-600" colspan="2">
                            Multi-Articulated
                            </td>

                        </tr>
                        <tr className="bg-white ">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Action Mode
                            </td>
                            <td className="px-6 py-3 text-center border border-slate-600" colspan="2">
                            Cylindrical
                            </td>

                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Load Capacity(Including End Effector)
                            </td>
                            <td className="px-6 py-3 border border-slate-600">
                            180kg(170lbs)
                            </td>
                            <td className="px-6 py-3 border border-slate-600">
                            160kg(340lbs)
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Palletizing Capacity (cycles / hour)
                            </td>
                            <td className="px-6 py-3 border border-slate-600">
                            1500
                            </td>
                            <td className="px-6 py-3 border border-slate-600">
                            1000
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Degree of freedom
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            4 axis
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600" rowspan="4">
                            Operating Area
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            2400mm(94.75")
                            </td>
                        </tr>
                        <tr className="bg-white">
                            
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            1600mm(63.125")
                            </td>
                        </tr>
                        <tr className="bg-white">
                            
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            330°
                            </td>
                        </tr>
                        <tr className="bg-white">
                            
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            330°
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Repeatability
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            ±0.1mm
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Memory
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            120-400 Programming locations available
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Teaching method
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            Teaching playback / Teaching Support
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Power Requirements
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            (200/220v,3Phase,50/60 HZ)
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Power Consumption (Without Peripheral Equipment Load)
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            4KVA / 10.5amps
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Robot Weight(Without End Effector)
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            750kg (1654lbs)
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600">
                            Pneumatic Consumption (*Using Standard fuji Case or Bag End Effector)
                            </td>
                            <td className="px-6 py-3 border border-slate-600" colspan="2">
                            *5.7SCFM @ 70psi(0.5MPa)
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td scope="row" className="px-6 py-3 text-black border border-slate-600" colspan="3">
                           <strong>Note:</strong>  Capacity rates can be significantly affected by layouts. product types,and can be confirmed after a detailed analysis of an application.
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            {/*  */}
            <div className="pt-5 pb-5">
                <table className="w-3/4 m-auto bg-gray-300">
                    <thead>
                        <tr onClick={handleVisible}>
                            <th className="border border-black p-4 text-left text-xl cursor-grab text-gray-600 flex justify-between">
                             EC-171 Operating Range
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    {isTableVisible ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    )}
                                </svg>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className={`relative flex items-center justify-center mx-auto w-3/4 pb-3 ${isVisible ? 'block' : 'hidden'}`}>
                <img src="https://www.fujirobotics.de/assets/img/ec171-operating-range1-productpage.webp" className="w-1/2 h-96"/>
                <img src="https://www.fujirobotics.de/assets/img/ec171-operating-range2-productpage.webp" className="w-1/2 h-96"/>
            </div>

            <Footer />
            <Icons />
        </>
    );
}