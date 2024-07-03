import React, { Fragment, useEffect } from "react";
import aboutImage from "../assets/image 1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./Services";
import Rewards from "./Rewards";
import Navbar from "./Navbar";
import AboutVideo from "./AboutVideo";
import Features from "./Features";
import Icons from "./Icons";
// import Tabs from "./Tabs";

export default function About({ language,setLanguage }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    
   
    <Fragment>
         <Navbar language={language} setLanguage={setLanguage}/>
      <div className="About py-10">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="about-heading-container mb-10">
            <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
              {language === "AR"
                ? `نبذة عننا `
                : language === "EN"
                ? `About Us`
                : "hhHakkımızda"}
            </h1>
          </div>
          <div className="about-content text-center">
            <img src={aboutImage} alt="about-image" data-aos="fade-in" />
            <div className="about-desc ">
              <p className="text-gray-200">
                {language === "AR"
                  ? `مع 26 عاما من الخبرة ، فإنه يوفر أعلى المعايير
              في الأداء والاستدامة. نحن نقدم عملية تسليم المفتاح
              حلول التشكيل والتعبئة والتغليف والخدمة من واحد
              مصدر.`
                  : language === "EN"
                  ? `With our 26 years of experience, it provides the highest standards
              in performance and sustainability. We offer turnkey process
              forming, filling, packaging and service solutions from a single
              source.`
                  : `26 yıllık tecrübemizle en yüksek standartları sağlıyor
              performans ve sürdürülebilirlikte. Anahtar teslim süreç sunuyoruz
              Şekillendirme, dolum, paketleme ve servis çözümleri tek bir
              kaynak.`}
              </p>
              <button className="about-btn hvr-pulse bg-SecondColor px-10 py-4 outline-none border-none rounded-lg my-5 text-white hover:bg-thirdColor transition-all">
                {" "}
                {language === "AR"
                  ? `عرض المشاريع `
                  : language === "EN"
                  ? `Show Projects`
                  : "Projeyi Göster"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutVideo language={language} />
      <Services language={language} />
      <Rewards language={language} />
      <Features language={language} />
      <Icons />
    </Fragment>
   
  );
}