import React, { useEffect, useState } from "react";
import { FaUtensils, FaSmileBeam, FaList, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const CountUpAnimation = ({
  iconComponent,
  initialValue,
  targetValue,
  text,
}) => {
  const [count, setCount] = useState(initialValue);
  const duration = 10000; // 4 seconds

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return (
    <div
      className="item_count bg-white mb-5 text-center p-4 "
      data-aos="fade-in"
    >
      <div className="icon text-center hvr-pop">{iconComponent}</div>
      <span className="num hvr-wobble-horizontal">{count}</span>
      <span className="text hvr-shutter-in-vertical rounded-lg">{text}</span>
    </div>
  );
};
export default function Rewards({ language }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="rewards py-10 ">
      <div className="px-5 sm:px-8 lg:px-8">
        <div className="rewards-heading-container mb-10">
          <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
            {language === "AR"
              ? ` إنجازاتنا `
              : language === "EN"
              ? `Our Rewards`
              : "Ödüllerimiz"}
          </h1>
        </div>
        <p className="rewards-desc text-center text-white">
          {language === "AR"
            ? ` نحن نهتم دائمًا بأعمال عملائنا ، فنحن نقدم خدمة عالية الجودة وأفضل الحلول لنشاطك التجاري. بفضل أحدث التقنيات وأتمتة عمليات التطوير ، نحن نقدم سرعة ونوعية التطوير. `
            : language === "EN"
            ? `We always care about our customers' business, we provide quality service and the best solutions for your business. Thanks to the latest technology and automation of development processes, we offer the speed and quality of development.`
            : "Müşterilerimizin işini her zaman önemsiyor, kaliteli hizmet ve işletmeniz için en iyi çözümleri sunuyoruz. En son teknoloji ve geliştirme süreçlerinin otomasyonu sayesinde, geliştirmenin hızını ve kalitesini sunuyoruz."}
        </p>
        <div className="wrapper sm:columns-2 text-center gap-5 mt-10">
          <CountUpAnimation
            iconComponent={<FaUtensils />}
            initialValue={0}
            targetValue={150}
            text="Meals Delivered"
          />
          <CountUpAnimation
            iconComponent={<FaSmileBeam />}
            initialValue={0}
            targetValue={200}
            text="Happy Customers"
          />
          <CountUpAnimation
            iconComponent={<FaList />}
            initialValue={0}
            targetValue={250}
            text="Menu Items"
          />
          <CountUpAnimation
            iconComponent={<FaStar />}
            initialValue={0}
            targetValue={300}
            text="Five Stars"
          />
        </div>
      </div>
    </div>
  );
}