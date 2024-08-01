import React, { Fragment, useEffect } from "react";
import aboutImage from "../assets/image 1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Icons from "./Icons";
import Footer from "./Footer";
import icon1 from "../assets/icons/1.png"
import icon2 from "../assets/icons/2.png"
import icon3 from "../assets/icons/3.png"
import icon4 from "../assets/icons/4.png"
import icon5 from "../assets/icons/5.png"
import icon6 from "../assets/icons/6.png"
import icon7 from "../assets/icons/7.png"
import icon8 from "../assets/icons/8.png"
import icon9 from "../assets/icons/9.png"
import icon10 from "../assets/icons/10.png"
import { Link } from "react-router-dom";


export default function About({ language, setLanguage }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (


    <Fragment>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="About py-10">
        <div className="px-2 sm:px-6 lg:px-8" >
          <div className="about-heading-container mb-10" data-aos="zoom-in">
            <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white">
              {language === "AR"
                ? `نبذة عننا `
                : language === "EN"
                  ? `About Us`
                  : "hhHakkımızda"}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center w-11/12 m-auto">
  <div className="flex flex-col w-full lg:w-1/2" data-aos="zoom-in">
    <p className="text-black">
      {language === "AR"
        ? `في شركة تكنوفاب تيكنولوجي، نحن متخصصون في تقديم حلول شاملة في نهاية خط الإنتاج مصممة لتلبية الاحتياجات الفريدة لعملائنا. مع التركيز القوي على الابتكار والكفاءة، نقدم آلات تكديس متقدمة وحلول تعبئة آلية مصممة لتحسين عملية التعبئة والتغليف الخاصة بك. يضمن التزامنا بالتميز أن حلولنا لا تعزز الإنتاجية فحسب، بل تتكامل أيضًا بسلاسة في عملياتك الحالية. اشترك مع تكنوفاب تيكنولوجي للحصول على أحدث التقنيات والدعم الذي لا مثيل له في تحقيق أهداف أتمتة نهاية خط الإنتاج الخاصة بك.`
        : language === "EN"
        ? `At Teknofab Teknoloji, we specialize in delivering comprehensive End-of-Line Solutions tailored to meet the unique needs of our customers. With a strong focus on innovation and efficiency, we provide advanced palletizers and robotic packing solutions designed to optimize your packaging process. Our commitment to excellence ensures that our solutions not only enhance productivity but also integrate seamlessly into your existing operations. Partner with Teknofab Teknoloji for cutting-edge technology and unparalleled support in achieving your end-of-line automation goals.`
        : `Teknofab Teknoloji'de, müşterilerimizin benzersiz ihtiyaçlarını karşılamak üzere tasarlanmış kapsamlı Son Hat Çözümleri sunma konusunda uzmanlaşıyoruz. Yenilik ve verimliliğe güçlü bir şekilde odaklanarak, paketleme sürecinizi optimize etmek için tasarlanmış gelişmiş paletleyiciler ve robotik paketleme çözümleri sağlıyoruz. Mükemmelliğe olan bağlılığımız, çözümlerimizin yalnızca üretkenliği artırmakla kalmayıp aynı zamanda mevcut operasyonlarınıza sorunsuz bir şekilde entegre olmasını sağlar. Son hat otomasyon hedeflerinize ulaşmada en son teknoloji ve benzersiz destek için Teknofab Teknoloji ile iş ortaklığı yapın.`}
    </p>
    <div className="flex flex-wrap justify-center mt-5">
      <Link to="/case-packer">
        <button className="hvr-pulse bg-SecondColor px-10 py-4 outline-none border-none rounded-lg my-2 text-white transition-all">
          {language === "AR"
            ? ``
            : language === "EN"
            ? `Top Load Case Packer`
            : "Top Load Case Packer"}
        </button>
      </Link>
      <Link to="/robot-palletizers">
        <button className="hvr-pulse bg-SecondColor mx-0 lg:mx-2 sm:mx-2 md:mx-2 xl:mx-2 px-14 py-4 outline-none border-none rounded-lg my-2 text-white transition-all">
          {language === "AR"
            ? `روبوتات التكديس`
            : language === "EN"
            ? `Robot Palletizers`
            : "Robot Paletleyiciler"}
        </button>
      </Link>
      <Link to="/packing-machines">
        <button className="hvr-pulse bg-SecondColor px-8 py-4 outline-none border-none rounded-lg my-2 text-white transition-all">
          {language === "AR"
            ? "مدقق الوزن"
            : language === "EN"
            ? `Checkweigher Conveyor`
            : "Kontrol Terazisi Konveyörü"}
        </button>
      </Link>
      <Link to="/robot-packing">
        <button className="hvr-pulse bg-SecondColor mx-0 lg:mx-2 sm:mx-2 md:mx-2 xl:mx-2 px-16 py-4 outline-none border-none rounded-lg my-2 text-white transition-all">
          {language === "AR"
            ? `التغليف الآلي`
            : language === "EN"
            ? `Packing Robot`
            : "Paketleme Robot"}
        </button>
      </Link>
      
    </div>
  </div>
  <div className="w-full lg:w-1/2" data-aos="zoom-in">
    <img src={aboutImage} alt="about-image" className="h-96 ml-0 lg:ml-5 rounded-lg w-full lg:w-auto" />
  </div>
</div>

        </div>
      </div>

      <div className="pb-5">
        <div className="robot-heading-container mb-10" data-aos="zoom-in">
          <h1 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white About_title">
            Industries We Serve
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center w-3/4 m-auto mt-5" data-aos="zoom-in">
          {/* العناصر العشرة مع توزيعها على صفين */}
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon8} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Food</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon3} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Beverage</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon4} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Cement</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon10} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Paints</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon9} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Lubricants</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon5} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Chemicals</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon2} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Animal Feed</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon1} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Agro Industry</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon7} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">All Kinds of FMCG</h4>
          </div>
          <div className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-3">
            <div className="rounded-xl border-gray-400 border bg-white p-3 w-20">
              <img src={icon6} alt="icon" className="hvr-pop" />
            </div>
            <h4 className="text-black text-md font-medium">Dairy</h4>
          </div>
        </div>

      </div>
      <Footer />
      <Icons />
    </Fragment>

  );
}