import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Footer";
import Icons from "./Icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import topleader from "../assets/top leader.png"

const TopLoadCasePacker = ({ language, setLanguage }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
        <>
        <Navbar language={language} setLanguage={setLanguage} />
        <div className="robot_palletizers py-10">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="robot-heading-container mb-10" data-aos="zoom-in">
            <h1 className="Heading-title font-bold text-2xl  bg-SecondColor p-3 text-center my-4 text-white About_title">
            TOP LOAD CASE PACKER
            </h1>
          </div>
          <div className="robot_about mb-10 flex items-center w-11/12 m-auto" data-aos="zoom-in">
            <div className="robot_desc flex-1" data-aos="zoom-in">
              <h1 className="robot_about_heading text-3xl">MAX. CAPACITY: 8-16 PACKS / MİNUTE</h1>
            </div>
            <div className="about_robot_img text-center" data-aos="zoom-in">
              <img src={topleader} alt="Robot" className="w-96 hvr-pop" />
            </div>
            </div> 
           {/*  */}
           <Tabs data-aos="zoom-in" className="w-11/12 m-auto">
            <TabList >
              <Tab>General Advantages</Tab>
              <Tab>Technical Details</Tab>
              <Tab>Optional Equipments</Tab>
              <Tab>Box Arrangements</Tab>
            </TabList>

            <TabPanel>
              <p className="mb-4">
                Increases existing workforce efficiency in both large and
                small-scale production,
              </p>
              <p className="mb-4">
                Enhances productivity, saving time and costs,
              </p>
              <p className="mb-4">Creates a seamless production process,</p>
              <p className="mb-4">Reduces labor costs,</p>
              <p className="mb-4">
                Operates efficiently at higher speeds without errors,
              </p>
              <p className="mb-4">
                Prevents material waste and potential errors due to human error,
              </p>
              <p className="mb-4">
                Allows automatic adjustment for box changes by defining the
                desired number of recipes,
              </p>
              <p className="mb-4">
                More boxes can be loaded thanks to the extended box magazine,
                warns the operator when boxes are low, and stops automatically
                when boxes are finished,
              </p>
              <p className="mb-4">
                Detects incomplete packages to prevent faulty boxes from being
                sent to customers,
              </p>
              <p className="mb-4">
                Extremely robust and stable with high uptime and low operating
                and maintenance costs,
              </p>
              <p className="mb-4">Touch screen control panel,</p>
              <p className="mb-4">
                Faulty package separation system with package length control via
                sensors,
              </p>
              <p className="mb-4">Hygienic design,</p>
              <p className="mb-4">
                Automatic width adjustment according to the product,
              </p>
              <p className="mb-4">
                Separate weight control unit for packages and boxes,
              </p>
              <p className="mb-4">
                Places packages into the box by vibrating them during filling.
              </p>
            </TabPanel>
            <TabPanel >
              <table className="table-auto topload-table w-1/2">
                <tr>
                  <td>MAX. CAPACITY: 8-16 Packs / Minute</td>
                </tr>
                <tr>
                  <td>ENERGY CONSUMPTION: 10 kW</td>
                </tr>
                <tr>
                  <td>AIR CONSUMOTION: 650 L / Minute 6-8 Bar</td>
                </tr>
                <tr>
                  <td>BOX TYPE: FEFCO 0201 Style (American Box)</td>
                </tr>
                <tr>
                  <td>BOX WIDTH: 200 – 300 mm</td>
                </tr>
                <tr>
                  <td>BOX HEIGHT: 250 – 400 mm</td>
                </tr>
                <tr>
                  <td>MIN. – MAX. BOX WEIGHT: 100 g – 5 kg</td>
                </tr>
                <tr>
                  <td>APPROXIMATE WEIGHT: 3800 kg</td>
                </tr>
              </table>
            </TabPanel>
            <TabPanel >
              <p className="mb-4">Metal Detector</p>
              <p className="mb-4">Package Weight Control Unit</p>
              <p className="mb-4">Box Weight Control Unit</p>
              <p className="mb-4">Faulty Package Separation Unit,</p>
              <p className="mb-4">Faulty Box Separation Unit</p>
              <p className="mb-4">QR Code Printing Unit</p>
            </TabPanel>
            <TabPanel >
                <div className="flex gap-2 items-center flex-wrap justify-center">
              <div className="border p-5">
                <h4 className="text-center">6*6 - 6*5</h4>
                <img src="https://hipermak.com.tr/en/wp-content/uploads/2024/07/4x4x4x5.jpg" alt="box" className="w-40"/>
              </div>
              <div className="border p-5">
                <h4 className="text-center">6*6 - 6*5</h4>
                <img src="https://hipermak.com.tr/en/wp-content/uploads/2024/07/4x4x4x5.jpg" alt="box" className="w-40"/>
              </div>
              <div className="border p-5">
                <h4 className="text-center">6*6 - 6*5</h4>
                <img src="https://hipermak.com.tr/en/wp-content/uploads/2024/07/4x4x4x5.jpg" alt="box" className="w-40"/>
              </div>
              <div className="border p-5">
                <h4 className="text-center">6*6 - 6*5</h4>
                <img src="https://hipermak.com.tr/en/wp-content/uploads/2024/07/4x4x4x5.jpg" alt="box" className="w-40"/>
              </div>
              <div className="border p-5">
                <h4 className="text-center">6*6 - 6*5</h4>
                <img src="https://hipermak.com.tr/en/wp-content/uploads/2024/07/4x4x4x5.jpg" alt="box" className="w-40"/>
              </div>
              </div>
            </TabPanel>
            
          </Tabs>
           {/*  */}
          </div>
          </div>
          <Footer/>
          <Icons/>
        </>
    );
}
export default TopLoadCasePacker;