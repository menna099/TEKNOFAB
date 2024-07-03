import React, { useState } from "react";
import Navbar from "./Navbar";
import image from "../assets/image 1.jpg"
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ProductDetails({ language, setLanguage }) {
    const [isTableVisible, setIsTableVisible] = useState(false);

    const handleClick = () => {
        setIsTableVisible(!isTableVisible);
    };

    return (
        <>
            <Navbar language={language} setLanguage={setLanguage} />
            <div className="p-3 max-w-7xl m-auto">
                
                <h1 className="text-3xl mt-3 text-blue-600 font-semibold sm:text-4xl">
                    {language === "AR"
                        ? ` ماكينات التغليف بالشرينك`
                        : language === "EN"
                            ? `Shrink Wrapping Machines`
                            : "Shrink Ambalaj Makinaları"}
                </h1>
                <div className="mt-6 sm:mt-10">
                    <div>
                        <div className="grid gird-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 h-max">
                            
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={image}
                                    alt="Product-Image"
                                    className="w-full h-full"
                                />
                            </div>
                            
                            <div className="flex flex-col justify-between">
                                <div>
                                   
                                    <p className="mt-3 text-gray-600 text-xl leading-6 text-justify sm:text-left sm:mt-4">
                                        Shrink packaging machines are used to wrap food, chemicals, cosmetics, textiles and stationery products in boxes, cardboard trays, tin cans, glass bottles, jars, plastic bottles, PET bottles with printed or unprinted polyethylene (PE), PVC or Polyolefin foil. They are manufactured in different types such as semi-automatic, front-fed fully automatic, side-fed fully automatic. <br/> <br/> In 
                                        addition, they are manufactured as a radiator packaging line as fully automatic radiator lowering machine, fully automatic bubble wrap machine and fully automatic radiator shrink machine for use in panel radiator production factories.
                                    </p>

                                </div>

                               
                                <div className="w-full text-left my-4">
                                    <Link to="/contact">
                                        <button
                                            className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-indigo-600 text-white text-md font-bold  rounded-md ease-in-out duration-150 shadow-slate-600 hvr-pulse lg:m-0 md:px-6"

                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>

                                            <span>Contact US</span>
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-5 pb-5">
                <table className="w-full">
                    <thead>
                        <tr onClick={handleClick}>
                            <th className="border-t border-b p-4 text-left text-2xl cursor-grab font-bold text-gray flex justify-between">
                                TECHNICIAL SPECIFICATIONS
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
                <table className="mx-auto w-5/6 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xl text-black uppercase border-b dark:border-gray-300 bg-white-50 dark:bg-gray-300 dark:text-black-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                TECHNICAL DETAILS
                            </th>
                            <th scope="col" className="px-6 py-3">
                                PNKS SH 60-50
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b  dark:bg-white-800 text-black dark:border-gray-300">
                            <th scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
                                Packaging Material
                            </th>
                            <td className="px-6 py-4">
                                PE, PVC, and other Shrink Materials
                            </td>

                        </tr>
                        <tr className="bg-white border-b  dark:bg-white-800 text-black  dark:border-gray-300">
                            <th scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
                                Packaging Width
                            </th>
                            <td className="px-6 py-4">
                                650mm.
                            </td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-white-800 text-black">
                            <th scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
                                Package Dimensions (Max.)
                            </th>
                            <td className="px-6 py-4">
                                500 x 1200 x 450mm.
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <Footer />
        </>
    );
}