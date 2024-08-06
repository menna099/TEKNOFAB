import React, { Fragment, useEffect, useState, Link } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Icons from "./Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import weight from '../assets/weight.jpg'
import IconOne from "../assets/icon_1.png";
import IconTwo from "../assets/icon_2.png";
import IconThree from "../assets/icon_3.png";
import IconFour from "../assets/icon_4.png";
import IconFive from "../assets/icon_5.png";
import IconSix from "../assets/icon_6.png";

export default function PackingMachines({ language, setLanguage }) {
  // const [active, setActive] = useState(
  //   "https://th.bing.com/th/id/R.61c3af0a54c0dc15821ac4f4896b39cc?rik=XNALvThEgGEBsQ&pid=ImgRaw&r=0"
  // );
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // const images = [
  //   {
  //     original:
  //       "https://th.bing.com/th/id/R.61c3af0a54c0dc15821ac4f4896b39cc?rik=XNALvThEgGEBsQ&pid=ImgRaw&r=0",
  //     thumbnail:
  //       "https://th.bing.com/th/id/R.61c3af0a54c0dc15821ac4f4896b39cc?rik=XNALvThEgGEBsQ&pid=ImgRaw&r=0",
  //   },
  //   {
  //     original:
  //       "https://www.spackmachine.com/wp-content/uploads/2022/03/16-1.png",
  //     thumbnail:
  //       "https://www.spackmachine.com/wp-content/uploads/2022/03/16-1.png",
  //   },
  //   {
  //     original:
  //       "https://th.bing.com/th/id/OIP.faZic5JW-Qp47nJQHUtacwAAAA?w=421&h=547&rs=1&pid=ImgDetMain",
  //     thumbnail:
  //       "https://th.bing.com/th/id/OIP.faZic5JW-Qp47nJQHUtacwAAAA?w=421&h=547&rs=1&pid=ImgDetMain",
  //   },
  //   {
  //     original:
  //       "https://th.bing.com/th/id/R.6b0a2b14d7d177c6826a771e1c58c43c?rik=M%2bXJrHOufYrsqQ&riu=http%3a%2f%2fwww.sinopham.com%2fcrab%2fimage%2forigin%2f2022%2f08%2f30%2f62a66a3d0fbb4d7ad65084e139227416.jpeg&ehk=5sQUFH44fWyzzjClPkn57TJFV7wPABEfHLbjX9yhioM%3d&risl=&pid=ImgRaw&r=0",
  //     thumbnail:
  //       "https://th.bing.com/th/id/R.6b0a2b14d7d177c6826a771e1c58c43c?rik=M%2bXJrHOufYrsqQ&riu=http%3a%2f%2fwww.sinopham.com%2fcrab%2fimage%2forigin%2f2022%2f08%2f30%2f62a66a3d0fbb4d7ad65084e139227416.jpeg&ehk=5sQUFH44fWyzzjClPkn57TJFV7wPABEfHLbjX9yhioM%3d&risl=&pid=ImgRaw&r=0",
  //   },
  // ];
  // const photos = [
  //   {
  //     src: "https://th.bing.com/th/id/R.61c3af0a54c0dc15821ac4f4896b39cc?rik=XNALvThEgGEBsQ&pid=ImgRaw&r=0",
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     src: "https://www.spackmachine.com/wp-content/uploads/2022/03/16-1.png",
  //     width: 1600,
  //     height: 900,
  //   },
  //   {
  //     src: "https://th.bing.com/th/id/OIP.faZic5JW-Qp47nJQHUtacwAAAA?w=421&h=547&rs=1&pid=ImgDetMain",
  //     width: 1600,
  //     height: 900,
  //   },
  //   {
  //     src: "https://th.bing.com/th/id/R.6b0a2b14d7d177c6826a771e1c58c43c?rik=M%2bXJrHOufYrsqQ&riu=http%3a%2f%2fwww.sinopham.com%2fcrab%2fimage%2forigin%2f2022%2f08%2f30%2f62a66a3d0fbb4d7ad65084e139227416.jpeg&ehk=5sQUFH44fWyzzjClPkn57TJFV7wPABEfHLbjX9yhioM%3d&risl=&pid=ImgRaw&r=0",
  //     width: 1600,
  //     height: 900,
  //   },
  // ];

  return (
    <Fragment>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="p-5 max-w-7xl m-auto mt-5">
        <div className="check-conveyor-container mb-10" data-aos="zoom-in">
          <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
            Checkweigher Conveyor
          </h1>
        </div>
       
          <div
            className="robot_about mb-10 flex items-center w-11/12 m-auto"
            data-aos="zoom-in"
          >
            <div className="robot_desc flex-1" data-aos="zoom-in">
              <h1 className="robot_about_heading text-2xl mb-2">
                Automatic online check weigher with rejector suitable for different applications.
              </h1>
            </div>
            <div className="about_robot_img text-center" data-aos="zoom-in">
              <img src={weight} alt="Robot" className="w-96 hvr-pop rounded-lg" />
            </div>
          </div>
        {/* {<RowsPhotoAlbum photos={photos} />} */}

        <div className="checker-content" data-aos="zoom-in">
          {/* <h1 className="text-SecondColor checker-content-heading mt-10 mb-5 text-center">
            Product Description
          </h1> */}
          <h4 className="font-bold text-xl text-center mb-10">
            key features and functions of an automatic checkweigher with
            rejector:
          </h4>
          <div className="key_features md:columns-2 lg:columns-3 mb-10">
            <div className="key_features_item text-center mb-5">
              <img src={IconTwo} alt="key" className="hvr-pop" />
              <h1>Basic Weighing Functionality</h1>
            </div>
            <div className="key_features_item text-center mb-5">
              <img src={IconFour} alt="key" className="hvr-pop" />
              <h1>Simple User Interface</h1>
            </div>
            <div className="key_features_item text-center mb-5">
              <img src={IconOne} alt="key" className="hvr-pop" />
              <h1>Speed and Throughput</h1>
            </div>
            <div className="key_features_item text-center mb-5">
              <img src={IconSix} alt="key" className="hvr-pop" />
              <h1>Compact Design</h1>
            </div>
            <div className="key_features_item text-center mb-5">
              <img src={IconThree} alt="key" className="hvr-pop" />
              <h1>Cost-Effective Maintenance</h1>
            </div>
            <div className="key_features_item text-center mb-5">
              <img src={IconFive} alt="key" className="hvr-pop" />
              <h1>Basic Data Reporting</h1>
            </div>
          </div>
          <div className="checker_items"></div>
          <table className="table-auto topload-table w-full conveyor_table">
            <tr>
              <th>Model</th>
              <td>DHCW-500*200</td>
            </tr>
            <tr>
              <th rowSpan="2">Weighing product</th>
              <td>Weight range (1g-5000g)</td>
            </tr>
            <tr>
              <td>Max size: (300*150*250 mm L*W*H)</td>
            </tr>
            <tr>
              <th>Weighing capacity</th>
              <td>3000g</td>
            </tr>
            <tr>
              <th>Minimum graduation</th>
              <td>0.01g</td>
            </tr>
            <tr>
              <th>Weighing speed</th>
              <td>0.120 pcs/min</td>
            </tr>
            <tr>
              <th>Weighing accuracy</th>
              <td>±1-3g</td>
            </tr>
            <tr>
              <th>Weighing belt size</th>
              <td>500mm*200mm (L*W)</td>
            </tr>
            <tr>
              <th>Weighing direction</th>
              <td>From left to right (Facing the operation display)</td>
            </tr>
            <tr>
              <th>Weighing sensor</th>
              <td>Germany HBM</td>
            </tr>
            <tr>
              <th>Control system</th>
              <td>Dahang (Independent R & D)</td>
            </tr>
            <tr>
              <th>Operation display</th>
              <td>8 inches touch screen</td>
            </tr>
            <tr>
              <th>Weighing data output</th>
              <td>USB port</td>
            </tr>
            <tr>
              <th>Rejecting type</th>
              <td>Flapper/pusher (with light alarming)</td>
            </tr>
            <tr>
              <th>Products parameters</th>
              <td>Can restore and recall 100 products</td>
            </tr>
            <tr>
              <th>Belt conveyor</th>
              <td>Food grade white color Belt</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>English</td>
            </tr>
            <tr>
              <th>Height of conveyor</th>
              <td>750+60mm (Customized)</td>
            </tr>
            <tr>
              <th>Power supply</th>
              <td>Single phase AC220V±10%, 50/60HZ</td>
            </tr>
            <tr>
              <th>Construction</th>
              <td>SUS304, polishing</td>
            </tr>
            <tr>
              <th>Using environment</th>
              <td>Normal</td>
            </tr>
            <tr>
              <th>Package</th>
              <td>
                With plastic film inside and professional export wooden case
                outside.
              </td>
            </tr>
            <tr>
              <th>HS code</th>
              <td>84232010.00</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
      <Icons />
    </Fragment>
  );
}