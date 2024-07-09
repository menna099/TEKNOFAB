import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Icons from "./Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Robot_One from "../assets/Robot_1.webp";
import Robot_Two from "../assets/Robot_2.webp";
import Robot_Three from "../assets/Robot_3.webp";
import EC_102 from "../assets/EC-102 pdf.pdf";
import EC_171 from "../assets/EC171 pdf.pdf";
import EC_201 from "../assets/EC201 pdf.pdf";

export default function RobotPalletizers({ language, setLanguage }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="robot_palletizers py-10">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="robot-heading-container mb-10" data-aos="zoom-in">
            <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
              {language === "AR"
                ? `روبوتات منصات نقالة`
                : language === "EN"
                ? `Palletizing Robots`
                : "Paletleme Robotları"}
            </h1>
          </div>
          <p
            className="robot-video-desc text-black text-center mb-10"
            data-aos="zoom-in"
          >
            {language === "AR"
              ? `ابتكرت فوجي أول منصة نقالة روبوتية في عام 1982 ، ولا يزال تصميمنا هو الأول في منصات التحميل الآلية.  بفضل تصميمنا اللولبي الكروي ، تكون روبوتاتنا أسرع وأقوى وتستخدم طاقة أقل من منصات التحميل الروبوتية الأخرى في السوق.`
              : language === "EN"
              ? `Fuji created the first robotic palletizer in 1982, and our design remains the premier for robotic palletizing.  With our ball-screw design, our robots are faster, stronger, and use less energy than other robotic palletizers in the market.`
              : "Fuji, 1982'de ilk robotik paletleyiciyi yarattı ve tasarımımız robotik paletleme için önde gelen olmaya devam ediyor.  Bilyalı vidalı tasarımımız ile robotlarımız piyasadaki diğer robotik paletleyicilere göre daha hızlı, daha güçlü ve daha az enerji kullanır."}
          </p>
          <div className="robots_palletizers_container gap-4">
            <div
              className="robot_item p-5 rounded-lg text-center mb-5"
              data-aos="zoom-in"
            >
              <div className="robot_item_desc" data-aos="zoom-in">
                <h1 className="robot_item_heading text-black mb-3 font-extrabold">
                  EC-102
                </h1>
                <p className="robot_item_text text-gray-700 mb-3">
                  {language === "AR"
                    ? `أحدث روبوت لدينا وأكثرها كفاءة ، EC-102 موجه لخطوط الإنتاج حيث تكون المساحة ضيقة أو بسرعات إخراج منخفضة إلى متوسطة.`
                    : language === "EN"
                    ? `Our newest and most efficient robot, the EC-102 is aimed for product lines where space is tight or with low-to-medium output speeds.`
                    : "En yeni ve en verimli robotumuz olan EC-102, alanın dar olduğu veya düşük-orta çıkış hızlarına sahip ürün serileri için tasarlanmıştır."}
                </p>
              </div>
              <img src={Robot_One} alt="robot_1" data-aos="zoom-in" />
              <div className="robot_item_overlay rounded-lg">
                <a
                  className="robot_item_btn p-3 rounded-lg font-bold hvr-pulse"
                  href={EC_102}
                  target="_blank"
                >
                  {language === "AR"
                    ? `المواصفات التقنية`
                    : language === "EN"
                    ? `Technical Specs`
                    : "Teknik Özellikler"}
                </a>
              </div>
            </div>
            <div
              className="robot_item p-5 rounded-lg text-center mb-5"
              data-aos="zoom-in"
            >
              <div className="robot_item_desc" data-aos="zoom-in">
                <h1 className="robot_item_heading text-black mb-3 font-extrabold">
                  EC-171
                </h1>
                <p className="robot_item_text text-gray-700 mb-3">
                  {language === "AR"
                    ? `يحتوي EC-171 على أكبر غلاف عمل وهو مصمم للعمليات ذات الإخراج المتوسط والتخطيطات التي تتطلب مدى أبعد.`
                    : language === "EN"
                    ? `The EC-171 has the largest working envelope and is made for operations with medium output and layouts requiring a farther reach.`
                    : "EC-171 en büyük çalışma zarfına sahiptir ve orta çıktılı operasyonlar ve daha uzak erişim gerektiren düzenler için yapılmıştır."}
                </p>
              </div>
              <img src={Robot_Two} alt="robot_2" data-aos="zoom-in" />
              <div className="robot_item_overlay rounded-lg">
                <a
                  className="robot_item_btn p-3 rounded-lg font-bold hvr-pulse"
                  href={EC_171}
                  target="_blank"
                >
                  {language === "AR"
                    ? `المواصفات التقنية`
                    : language === "EN"
                    ? `Technical Specs`
                    : "Teknik Özellikler"}
                </a>
              </div>
            </div>
            <div
              className="robot_item p-5 rounded-lg text-center"
              data-aos="zoom-in"
            >
              <div className="robot_item_desc" data-aos="zoom-in">
                <h1 className="robot_item_heading text-black mb-3 font-extrabold">
                  EC-201
                </h1>
                <p className="robot_item_text text-gray-700 mb-3">
                  {language === "AR"
                    ? `EC-201 هو أسرع وأقوى طراز في فوجي.  مثالي للمرافق عالية الإنتاج أو المنتجات الثقيلة.`
                    : language === "EN"
                    ? `The EC-201 is Fuji's fastest and strongest model.  Perfect for high-output facilities or heavier products.`
                    : "EC-201, Fuji'nin en hızlı ve en güçlü modelidir.  Yüksek verimli tesisler veya daha ağır ürünler için mükemmeldir."}
                </p>
              </div>
              <img src={Robot_Three} alt="robot_3" data-aos="zoom-in" />
              <div className="robot_item_overlay rounded-lg">
                <a
                  className="robot_item_btn p-3 rounded-lg font-bold hvr-pulse"
                  href={EC_201}
                  target="_blank"
                >
                  {language === "AR"
                    ? `المواصفات التقنية`
                    : language === "EN"
                    ? `Technical Specs`
                    : "Teknik Özellikler"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Icons />
    </Fragment>
  );
}