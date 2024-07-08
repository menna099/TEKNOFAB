import React from "react";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { FaRocket } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { FaIndustry } from "react-icons/fa";

export default function Features({ language }) {
  const featuresArr = [
    {
      featureId: "feature_one",
      featureHeadingEn: "Price",
      featureHeadingTr: "fiyat",
      featureHeadingAr: "السعر",
      featureTextEn: "The price is suitable and convenient for everyone",
      featureTextTr: "Fiyat herkes için uygun ve uygundur",
      featureTextAr: "السعر مناسب وملائم للجميع",
      featureIcon: <MdOutlinePriceChange className="hvr-pop" />,
    },
    {
      featureId: "feature_two",
      featureHeadingEn: "Speed",
      featureHeadingTr: "Hız",
      featureHeadingAr: "السرعة",
      featureTextEn: "Speed in execution and performance of tasks",
      featureTextTr: "Görevlerin yürütülmesinde ve performansında hız",
      featureTextAr: "سرعة في التنفيذ وأداء المهام",
      featureIcon: <IoIosSpeedometer className="hvr-pop" />,
    },
    {
      featureId: "feature_three",
      featureHeadingEn: "Performance",
      featureHeadingTr: "performans",
      featureHeadingAr: "الأداء",
      featureTextEn: "High and excellent performance ",
      featureTextTr: "Yüksek ve mükemmel performans ",
      featureTextAr: "أداء عالي وممتاز ",
      featureIcon: <FaRocket className="hvr-pop" />,
    },
    {
      featureId: "feature_four",
      featureHeadingEn: "Quality",
      featureHeadingTr: "Nitelik",
      featureHeadingAr: "الجودة",
      featureTextEn: "High quality without any errors",
      featureTextTr: "Hatasız yüksek kalite",
      featureTextAr: "جودة عالية بدون أي أخطاء",
      featureIcon: <MdHighQuality className="hvr-pop" />,
    },
    {
      featureId: "feature_five",
      featureHeadingEn: "Community",
      featureHeadingTr: "Kamu",
      featureHeadingAr: "الجمهور",
      featureTextEn: "It is immensely popular and impressed by everyone",
      featureTextTr: "Son derece popüler ve herkes tarafından etkilendi",
      featureTextAr: "ذو شعبية هائلة وتنال إعجاب الجميع",
      featureIcon: <RiCommunityFill className="hvr-pop" />,
    },
    {
      featureId: "feature_six",
      featureHeadingEn: "Industry",
      featureHeadingTr: "endüstri ",
      featureHeadingAr: "الصناعة",
      featureTextEn: "Competitive and high-quality industry",
      featureTextTr: "Rekabetçi ve yüksek kaliteli endüstri",
      featureTextAr: "صناعة ذو تنافسية وجودة عالية",
      featureIcon: <FaIndustry className="hvr-pop" />,
    },
  ];

  return (
    <div className="tabs py-10">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="tabs-heading-container mb-10">
          <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
            {language === "AR"
              ? `مميزاتنا`
              : language === "EN"
              ? `Our Features`
              : "Bizim özelliklerimiz"}
          </h1>
        </div>
        <p
          className="tabs-desc text-center text-black mb-10"
          data-aos="zoom-in"
        >
          {language === "AR"
            ? `نتطلّع لنكون الأفضل والاميز من خلال فريق عمل متميز وخامات عالية الجودة، فنقدم خدمات عالية الجودة لضمان نجاح العميل. `
            : language === "EN"
            ? `We look forward to being the best and distinguished through a distinguished team and high-quality materials, so we provide high-quality services to ensure the success of the customer.`
            : "Seçkin bir ekip ve yüksek kaliteli malzemelerle en iyi ve seçkin olmayı dört gözle bekliyoruz, bu nedenle müşterinin başarısını sağlamak için yüksek kaliteli hizmetler sunuyoruz."}
        </p>
        <div className="features-container gap-5 lg:columns-3 md:columns-2 text-center">
          {featuresArr.map((ele) => {
            return (
              <>
                <div className="feature-item mb-5" data-aos="zoom-in" key={ele.featureId}>
                  {ele.featureIcon}
                  <h1 className="feature-heading hvr-wobble-horizontal">
                    {language === "AR"
                      ? `${ele.featureHeadingAr}`
                      : language === "EN"
                      ? `${ele.featureHeadingEn}`
                      : `${ele.featureHeadingTr}`}
                  </h1>
                  <p className="feature-desc text-gray-700">
                    {language === "AR"
                      ? `${ele.featureTextAr}`
                      : language === "EN"
                      ? `${ele.featureTextEn}`
                      : `${ele.featureTextTr}`}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}