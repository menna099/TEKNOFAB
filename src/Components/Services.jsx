import React, { useEffect } from "react";
import Service1 from "../assets/service_1.png";
import Service2 from "../assets/service_2.png";
import Service3 from "../assets/service_3.png";
import Service4 from "../assets/service_4.png";
import Service5 from "../assets/service_5.png";
import Service6 from "../assets/service_6.png";
import AOS from "aos";
import "aos/dist/aos.css";

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
                ? ` خدماتنـــا `
                : language === "EN"
                ? `Our Services`
                : "Hizmetlerimiz"}
            </h1>
          </div>
          <p className="services-desc text-white text-center w-11/12 m-auto" data-aos="zoom-in">
            {language === "AR"
              ? ` نحن نهتم دائمًا بأعمال عملائنا ، فنحن نقدم خدمة عالية الجودة وأفضل الحلول لنشاطك التجاري. بفضل أحدث التقنيات وأتمتة عمليات التطوير ، نحن نقدم سرعة ونوعية التطوير. `
              : language === "EN"
              ? `We always care about our customers' business, we provide quality service and the best solutions for your business. Thanks to the latest technology and automation of development processes, we offer the speed and quality of development.`
              : "Müşterilerimizin işini her zaman önemsiyor, kaliteli hizmet ve işletmeniz için en iyi çözümleri sunuyoruz. En son teknoloji ve geliştirme süreçlerinin otomasyonu sayesinde, geliştirmenin hızını ve kalitesini sunuyoruz."}
          </p>
          <div className="services-items  lg:columns-3 sm:columns-2 gap-5 text-center mt-10 w-11/12 m-auto">
            <div
              className="item p-4 rounded-lg bg-white mb-5 text-center animation"
              data-aos="zoom-in"
            >
              <img src={Service1} alt="Service One" className="hvr-pop" />
              <h2 className="font-bold my-5">
                {language === "AR"
                  ? `الخدمة الأولى`
                  : language === "EN"
                  ? `Service One`
                  : "Birinci Hizmet"}
              </h2>
              <p color="text-gray-700">Hello Service One</p>
            </div>
            <div
              className="item p-4 rounded-lg bg-white mb-5 text-center animation"
              data-aos="fade-down"
            >
              <img src={Service2} alt="Service One" className="hvr-pop" />
              <h2 className="font-bold my-5">
                {language === "AR"
                  ? `الخدمة الثانية`
                  : language === "EN"
                  ? `Service Two`
                  : "İkinci Hizmet"}
              </h2>
              <p color="text-gray-700">Hello Service Two</p>
            </div>
            <div
              className="item p-4 rounded-lg bg-white mb-5 text-center animation"
              data-aos="fade-down"
            >
              <img src={Service3} alt="Service One" className="hvr-pop" />
              <h2 className="font-bold my-5">
                {language === "AR"
                  ? `الخدمة الثالثة`
                  : language === "EN"
                  ? `Service Three`
                  : "Üçüncü hizmet"}
              </h2>
              <p color="text-gray-700">Hello Service Three</p>
            </div>
            <div
              className="item p-4 rounded-lg bg-white mb-5 text-center animation"
              data-aos="fade-up"
            >
              <img src={Service4} alt="Service One" className="hvr-pop" />
              <h2 className="font-bold my-5">
                {language === "AR"
                  ? `الخدمة الرابعة`
                  : language === "EN"
                  ? `Service Four`
                  : "Dördüncü servis"}
              </h2>
              <p color="text-gray-700">Hello Service Four</p>
            </div>
            <div
              className="item p-4 rounded-lg bg-white mb-5 text-center animation"
              data-aos="flip-right"
            >
              <img src={Service5} alt="Service One" className="hvr-pop" />
              <h2 className="font-bold my-5">
                {language === "AR"
                  ? `الخدمة الخامسة`
                  : language === "EN"
                  ? `Service Five`
                  : "Beşinci hizmet"}
              </h2>
              <p color="text-gray-700">Hello Service Five</p>
            </div>
            <div
              className="item p-4 rounded-lg bg-white mb-5 text-center animation"
              data-aos="flip-left"
            >
              <img src={Service6} alt="Service One" className="hvr-pop" />
              <h2 className="font-bold my-5">
                {language === "AR"
                  ? `الخدمة السادسة`
                  : language === "EN"
                  ? `Service Six`
                  : "Altı servis"}
              </h2>
              <p color="text-gray-700">Hello Service Six</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}