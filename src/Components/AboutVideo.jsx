import React from "react";
import Video from "../assets/video.mp4";
import { Link } from "react-router-dom";

export default function AboutVideo({ language }) {
  return (
    <>
      <div className="AboutVideo py-10">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="aboutvideo-heading-container mb-10">
            <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
              {language === "AR"
                ? `من نحن ؟`
                : language === "EN"
                  ? `Who We Are ?`
                  : "Kimsin ?"}
            </h1>
          </div>
          <p className="about-video-desc text-black text-center mb-10 w-11/12 m-auto" data-aos="zoom-in">
            {language === "AR" ? (
              "بناء الثقة والمصداقية حيث تسمح للزوار بفهم هوية ورؤية المؤسسة أو الشخص، مما يساهم في بناء الثقة والمصداقية بينك وبين الجمهور."
            ) : language === "EN" ? (
              <>
                {"At Teknofab Teknoloji, we specialize in delivering comprehensive End-of-Line Solutions tailored to meet the unique needs of our customers. With a strong focus on innovation and efficiency, we provide advanced "}
                <Link to="/about" className="text-SecondColor text-lg">see more details...</Link>
              </>
            ) : (
              "Ziyaretçilerin kurumun veya kişinin kimliğini ve vizyonunu anlamalarına olanak tanıdığı için güven ve güvenilirlik oluşturmak, bu da sizinle halk arasında güven ve güvenilirlik oluşturmaya katkıda bulunur."
            )}
          </p>
          <div className="video-container" data-aos="zoom-in">
            <video controls loop>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}