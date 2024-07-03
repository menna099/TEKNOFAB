import image from "../assets/image 1.jpg"
import "aos/dist/aos.css";

export default function Cards({language}) {
    return (
        <>
        <div className="mt-10 ml-auto  mr-auto max-w-xs">
                    <h4 className="text-2xl font-bold">{language === "AR"
                            ? `المنتجات التكميلية`
                            : language === "EN"
                                ? `Complementary Products`
                                : "Tamamlayıcı ürünler"}</h4>
                </div>
            <div className=" grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5 pb-4">
                
                <div
                    className="mx-3 mt-6 cards  flex flex-col hover:bg-gray-400 rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-gray-500 sm:shrink-0 sm:grow sm:basis-0 animate-fade-down animate-once">
                    <a href="#" className="hvr-float">
                        <img
                            className="rounded-t-lg  w-full object-cover object-center lg:w-full"
                            src={image}
                            alt="Hollywood Sign on The Hill" />
                    
                    <div className="p-6 item">
                        <h5 className="mb-2 text-xl text-black font-medium leading-tight">
                        {language === "AR"
                            ? ` ماكينات التغليف بالشرينك`
                            : language === "EN"
                                ? `Shrink Wrapping Machines`
                                : "Shrink Ambalaj Makinaları"}
                        </h5>
                        <p className="mb-4 text-base text-gray-600">
                        {language === "AR"
                            ?  `يتم إنتاج ماكينات التعبئة والتغليف بالشرينك على النحو التالي: تغذية أمامية نصف أوتوماتيكية، أوتوماتيكية بالكامل، والمزيد من أنواع التغذية المختلفة الجديدة.`
                            : language === "EN"
                                ? `The Shrink packaging machines are produced as; semi-automatic, full automated front-feed, and more other new different feeding types.`
                                : "Shrink ambalaj makinaları; yarı otomatik, tam otomatik önden besleme ve daha birçok yeni farklı besleme türü."}
                            
                        </p>
                        <button
                            type="button"
                            className="inline-block hvr-pulse rounded bg-indigo-600 px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init
                            data-twe-ripple-color="">
                            {language === "AR"
                            ? `عرض التفاصيل`
                            : language === "EN"
                                ? `View Details`
                                : "Ayrıntıları görüntüle"}
                        </button>
                    </div>
                    </a>
                </div>

                <div
                    className="mx-3 mt-6 cards flex flex-col rounded-lg hover:bg-gray-400 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-gray-500 sm:shrink-0 sm:grow sm:basis-0 animate-fade-down animate-once">
                    <a href="#" className="hvr-float">
                        <img
                            className="rounded-t-lg w-full object-cover object-center lg:w-full"
                            src={image}
                            alt="Hollywood Sign on The Hill" />
                    
                    <div className="p-6 item">
                        <h5 className="mb-2 text-xl text-black font-medium leading-tight">
                        {language === "AR"
                            ? ` ماكينات التغليف بالشرينك`
                            : language === "EN"
                                ? `Shrink Wrapping Machines`
                                : "Shrink Ambalaj Makinaları"}
                        </h5>
                        <p className="mb-4 text-base text-gray-600">
                        {language === "AR"
                            ?  `يتم إنتاج ماكينات التعبئة والتغليف بالشرينك على النحو التالي: تغذية أمامية نصف أوتوماتيكية، أوتوماتيكية بالكامل، والمزيد من أنواع التغذية المختلفة الجديدة.`
                            : language === "EN"
                                ? `The Shrink packaging machines are produced as; semi-automatic, full automated front-feed, and more other new different feeding types.`
                                : "Shrink ambalaj makinaları; yarı otomatik, tam otomatik önden besleme ve daha birçok yeni farklı besleme türü."}
                            
                        </p>
                        <button
                            type="button"
                            className="inline-block hvr-pulse rounded bg-indigo-600 px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init
                            data-twe-ripple-color="">
                            {language === "AR"
                            ? `عرض التفاصيل`
                            : language === "EN"
                                ? `View Details`
                                : "Ayrıntıları görüntüle"}
                        </button>
                    </div>
                    </a>
                </div>

                <div
                    className="mx-3 mt-6 cards flex flex-col rounded-lg hover:bg-gray-400 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-gray-500 sm:shrink-0 sm:grow sm:basis-0 animate-fade-down animate-once">
                    <a href="#" className="hvr-float">
                        <img
                            className="rounded-t-lg w-full object-cover object-center lg:w-full"
                            src={image}
                            alt="Hollywood Sign on The Hill" />
                    
                    <div className="p-6 item">
                        <h5 className="mb-2 text-xl text-black font-medium leading-tight">
                        {language === "AR"
                            ? ` ماكينات التغليف بالشرينك`
                            : language === "EN"
                                ? `Shrink Wrapping Machines`
                                : "Shrink Ambalaj Makinaları"}
                        </h5>
                        <p className="mb-4 text-base text-gray-600">
                        {language === "AR"
                            ?  `يتم إنتاج ماكينات التعبئة والتغليف بالشرينك على النحو التالي: تغذية أمامية نصف أوتوماتيكية، أوتوماتيكية بالكامل، والمزيد من أنواع التغذية المختلفة الجديدة.`
                            : language === "EN"
                                ? `The Shrink packaging machines are produced as; semi-automatic, full automated front-feed, and more other new different feeding types.`
                                : "Shrink ambalaj makinaları; yarı otomatik, tam otomatik önden besleme ve daha birçok yeni farklı besleme türü."}
                            
                        </p>
                        <button
                            type="button"
                            className="inline-block hvr-pulse rounded bg-indigo-600 px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init
                            data-twe-ripple-color="">
                            {language === "AR"
                            ? `عرض التفاصيل`
                            : language === "EN"
                                ? `View Details`
                                : "Ayrıntıları görüntüle"}
                        </button>
                    </div>
                    </a>
                </div>

                <div
                    className="mx-3 mt-6 cards flex flex-col rounded-lg hover:bg-gray-400 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-gray-500 sm:shrink-0 sm:grow sm:basis-0 animate-fade-down animate-once">
                    <a href="#" className="hvr-float">
                        <img
                            className="rounded-t-lg w-full object-cover object-center lg:w-full"
                            src={image}
                            alt="Hollywood Sign on The Hill" />
                    
                    <div className="p-6 item">
                        <h5 className="mb-2 text-xl text-black font-medium leading-tight">
                        {language === "AR"
                            ? ` ماكينات التغليف بالشرينك`
                            : language === "EN"
                                ? `Shrink Wrapping Machines`
                                : "Shrink Ambalaj Makinaları"}
                        </h5>
                        <p className="mb-4 text-base text-gray-600">
                        {language === "AR"
                            ?  `يتم إنتاج ماكينات التعبئة والتغليف بالشرينك على النحو التالي: تغذية أمامية نصف أوتوماتيكية، أوتوماتيكية بالكامل، والمزيد من أنواع التغذية المختلفة الجديدة.`
                            : language === "EN"
                                ? `The Shrink packaging machines are produced as; semi-automatic, full automated front-feed, and more other new different feeding types.`
                                : "Shrink ambalaj makinaları; yarı otomatik, tam otomatik önden besleme ve daha birçok yeni farklı besleme türü."}
                            
                        </p>
                        <button
                            type="button"
                            className="inline-block hvr-pulse rounded bg-indigo-600 px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init
                            data-twe-ripple-color="">
                            {language === "AR"
                            ? `عرض التفاصيل`
                            : language === "EN"
                                ? `View Details`
                                : "Ayrıntıları görüntüle"}
                        </button>
                    </div>
                    </a>
                </div>
            </div>
        </>
    )
}