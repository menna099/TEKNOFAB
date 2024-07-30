import React, { Fragment, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Icons from "./Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Pack_One from "../assets/pack_machine_1.webp";
import Pack_Two from "../assets/pack_machine_2.webp";
import Pack_Three from "../assets/pack_machine_3.webp";
import Pack_Four from "../assets/pack_machine_4.webp";
import Pack_Video_One from "../assets/video.mp4";

export default function PackingMachines({ language, setLanguage }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Fragment>
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="packing_machines py-10">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="packing-heading-container mb-10" data-aos="zoom-in">
            <h1 className="Heading-title font-bold text-2xl bg-SecondColor p-3 text-center my-4 text-white About_title">
              {language === "AR"
                ? `مدقق الوزن`
                : language === "EN"
                ? `Checkweigher Conveyor`
                : "Kontrol Terazisi Konveyörü"}
            </h1>
          </div>
          <p
            className="packing-desc text-black text-center mb-10 w-11/12 m-auto"
            data-aos="zoom-in"
          >
            {language === "AR"
              ? `إنها تشكل وتملأ وتغلق وتلتف وتنظف وتعبئ على مستويات مختلفة من الأتمتة. هذه الآلات ضرورية في مختلف الصناعات مثل الأغذية والمشروبات والأدوية والسلع الاستهلاكية.`
              : language === "EN"
              ? `They form, fill, seal, wrap, clean, and package at different levels of automation. These machines are essential across various industries such as food, beverage, pharmaceutical, and consumer goods.`
              : "Farklı otomasyon seviyelerinde şekillendirir, doldurur, mühürler, sarar, temizler ve paketler. Bu makineler yiyecek, içecek, ilaç ve tüketim malları gibi çeşitli endüstrilerde gereklidir."}
          </p>
          <div className="packing_container  w-11/12 m-auto">
            <div
              className="packing_item p-5 rounded-lg gap-4 mb-5 "
              data-aos="zoom-in"
            >
              <div
                className="packing_item_details p-4 rounded-lg bg-SecondColor flex items-center justify-between gap-4 mb-5"
                data-aos="zoom-in"
              >
                <div className="packing_item_desc" data-aos="zoom-in">
                  <h1
                    className="packing_item_heading dark:text-white mb-3 font-extrabold"
                    data-aos="zoom-in"
                  >
                    {language === "AR"
                      ? `حقيبة منصات نقالة`
                      : language === "EN"
                      ? `Bag Palletizing`
                      : "Torba Paletleme"}
                  </h1>
                  <p
                    className="packing_item_text text-gray-50"
                    data-aos="zoom-in"
                  >
                    {language === "AR"
                      ? `
منصات فوجي لدينا متخصصة في التعامل مع الأكياس. اختر من بين أحد أنماط منصات التحميل المحملة مسبقا وحقق إنتاجا يصل إلى 30 كيسا / دقيقة`
                      : language === "EN"
                      ? `Our Fuji palletizers are specialized for sack handling. Choose from one of our preloaded palletizing patterns and achieve an output up to 30 bags/minute`
                      : "Fuji paletleyicilerimiz çuval taşıma için uzmanlaşmıştır. Önceden yüklenmiş paletleme modellerimizden birini seçin ve dakikada 30 torbaya kadar çıktı elde edin"}
                  </p>
                </div>
                <img
                  src={Pack_One}
                  alt="Pack_One"
                  className="rounded-lg lg:flex-1"
                  data-aos="zoom-in"
                />
              </div>
              <div className="pack-video-container" data-aos="zoom-in">
                <video
                  controls
                  className="rounded-lg mx-auto"
                  poster={Pack_One}
                >
                  <source src={Pack_Video_One} type="video/mp4" />
                </video>
              </div>
            </div>
            <div
              className="packing_item p-5 rounded-lg gap-4 mb-5 "
              data-aos="zoom-in"
            >
              <div
                className="packing_item_details p-4 rounded-lg bg-SecondColor flex items-center justify-between gap-4 mb-5"
                data-aos="zoom-in"
              >
                <div className="packing_item_desc" data-aos="zoom-in">
                  <h1 className="packing_item_heading text-white mb-3 font-extrabold">
                    {language === "AR"
                      ? `حالة منصات نقالة`
                      : language === "EN"
                      ? `Case Palletizing`
                      : "Koli Paletleme"}
                  </h1>
                  <p
                    className="packing_item_text text-gray-50"
                    data-aos="zoom-in"
                  >
                    {language === "AR"
                      ? `الحالات والصناديق هي أيضا مجال من مجالات خبرتنا.  اختر قابضا مع ضبط تلقائي للعرض للتعامل مع أنواع مختلفة من المنتجات في نفس الوقت. التقط أكثر من 1 منتج دفعة واحدة لزيادة إنتاج خط الإنتاج الخاص بك.`
                      : language === "EN"
                      ? `Cases and Boxes is also  an area of our expertise.  Choose a gripper with auto width adjustment to handle  different kinds of products at the same time. Pick up more than 1 product at once to increase the output of your production line.`
                      : "Kılıflar ve Kutular da uzmanlık alanımızın bir alanıdır.  Farklı türdeki ürünleri aynı anda işlemek için otomatik genişlik ayarlı bir tutucu seçin. Üretim hattınızın çıktısını artırmak için aynı anda 1'den fazla ürün alın."}
                  </p>
                </div>
                <img
                  src={Pack_Two}
                  alt="Pack_Two"
                  className="rounded-lg lg:flex-1"
                  data-aos="zoom-in"
                />
              </div>
              <div className="pack-video-container" data-aos="zoom-in">
                <video
                  controls
                  className="rounded-lg mx-auto"
                  poster={Pack_Two}
                >
                  <source src={Pack_Video_One} type="video/mp4" />
                </video>
              </div>
            </div>
            <div
              className="packing_item p-5 rounded-lg gap-4 mb-5 "
              data-aos="zoom-in"
            >
              <div
                className="packing_item_details p-4 rounded-lg bg-SecondColor flex items-center justify-between gap-4 mb-5"
                data-aos="zoom-in"
              >
                <div className="packing_item_desc" data-aos="zoom-in">
                  <h1
                    className="packing_item_heading text-white mb-3 font-extrabold"
                    data-aos="zoom-in"
                  >
                    {language === "AR"
                      ? `فراغ منصات نقالة`
                      : language === "EN"
                      ? `Vacuum Palletizing`
                      : "Vakumlu Paletleme"}
                  </h1>
                  <p
                    className="packing_item_text text-gray-50"
                    data-aos="zoom-in"
                  >
                    {language === "AR"
                      ? `القابضون فراغ التكيف مع أي نوع من الاحتياجات. يمكنك وضع منصات نقالة أو إزالة منصات نقالة من العديد من المنتجات المختلفة فقط باستخدام مستجيب نهائي واحد مما يوفر لك المال والمتاعب على المدى الطويل.`
                      : language === "EN"
                      ? `Vacuum grippers adapt to any kind of need. You can palletize or depalletize many different products just with one End Effector saving you money and troubles in the long run.`
                      : "Vakumlu tutucular her türlü ihtiyaca uyum sağlar. Tek bir Uç Efektörü ile birçok farklı ürünü paletleyebilir veya paletten çıkarabilir, uzun vadede paradan ve zahmetten tasarruf edebilirsiniz."}
                  </p>
                </div>
                <img
                  src={Pack_Three}
                  alt="Pack_Three"
                  className="rounded-lg lg:flex-1"
                  data-aos="zoom-in"
                />
              </div>
              <div className="pack-video-container" data-aos="zoom-in">
                <video
                  controls
                  className="rounded-lg mx-auto"
                  poster={Pack_Three}
                >
                  <source src={Pack_Video_One} type="video/mp4" />
                </video>
              </div>
            </div>
            <div
              className="packing_item p-5 rounded-lg gap-4 mb-5 "
              data-aos="zoom-in"
            >
              <div
                className="packing_item_details p-4 rounded-lg bg-SecondColor flex items-center justify-between gap-4 mb-5"
                data-aos="zoom-in"
              >
                <div className="packing_item_desc" data-aos="zoom-in">
                  <h1
                    className="packing_item_heading text-white mb-3 font-extrabold"
                    data-aos="zoom-in"
                  >
                    {language === "AR"
                      ? `أباريق الماء منصات نقالة`
                      : language === "EN"
                      ? `Water Jugs Palletizing`
                      : "Su Sürahileri Paletleme"}
                  </h1>
                  <p
                    className="packing_item_text text-gray-50"
                    data-aos="zoom-in"
                  >
                    {language === "AR"
                      ? `روبوتات Fuji Ace مرنة ويمكنها التعامل مع أنواع متعددة من المنتجات. يمكن بسهولة وضع أباريق الماء على منصات نقالة بواسطة روبوتاتنا بمعدل مرتفع.`
                      : language === "EN"
                      ? `Fuji Ace robots are flexible and can handle multiple types of products. Jugs of water could be easily palletized by our robots at a high rate.`
                      : "Fuji Ace robotları esnektir ve birden fazla ürün türünü işleyebilir. Su sürahileri robotlarımız tarafından yüksek oranda kolayca paletlenebilir."}
                  </p>
                </div>
                <img
                  src={Pack_Four}
                  alt="Pack_Four"
                  className="rounded-lg lg:flex-1"
                  data-aos="zoom-in"
                />
              </div>
              <div className="pack-video-container" data-aos="zoom-in">
                <video
                  controls
                  className="rounded-lg mx-auto"
                  poster={Pack_Four}
                >
                  <source src={Pack_Video_One} type="video/mp4" />
                </video>
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
