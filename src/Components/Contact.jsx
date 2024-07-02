import Navbar from "./Navbar"

const Contact = ({ language ,setLanguage}) => {
console.log(language);
    return (

        <>
            <Navbar language={language} setLanguage={setLanguage} />
            <section className="bg-white dark:bg-gray-900">
                <div className="pt-10 pb-3 lg:pt-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        {language === "AR"
                            ? ` تواصل معنا `
                            : language === "EN"
                                ? `Contact Us`
                                : "Bize Ulaşın"}
                    </h2>
                    <p className="mb-0 lg:mb-0 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        {language === "AR"
                            ? `هل لديك مشكلة فنية؟ هل تريد إرسال تعليقات حول إحدى الميزات التجريبية؟ هل تحتاج إلى تفاصيل حول خطة أعمالنا؟ دعنا نعرف.`
                            : language === "EN"
                                ? `Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.`
                                : "Teknik bir sorun mu var? Bir beta özelliği hakkında geri bildirim mi göndermek istiyorsunuz? İş planımızla ilgili ayrıntılara mı ihtiyacınız var? Bilmemize izin ver"}
                    </p>
                </div>
            </section>
            <div className="relative flex items-top mt-0 justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-5 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                <h1 className="text-3xl sm:text-3xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                {language === "AR"
                            ? ` تواصل معنا `
                            : language === "EN"
                                ? `Git in Touch`
                                : "Temasta olmak"}
                                </h1>
                                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                {language === "AR"
                            ? ` تواصل معنا `
                            : language === "EN"
                                ? `Fill in the form to start a conversation`
                                : "Görüşme başlatmak için formu doldurun"}
                                </p>

                                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold">
                                        Şehremini Mah. Velet Çelebi Caddesi. <br />
                                        No: 9/A Fatih / İSTANBUL
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold">
                                        00905446546062 <br />
                                        00201110122012
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold ">
                                        sales@teknofab.com.tr
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold ">
                                        www.teknofab.com.tr
                                    </div>
                                </div>

                            </div>
                            <form action="#" className="space-y-8">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {language === "AR"
                            ? `بريدك الإلكتروني `
                            : language === "EN"
                                ? `Your Email`
                                : "E-postanız"}</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {language === "AR"
                            ? `الموضوع `
                            : language === "EN"
                                ? `Subject`
                                : "Konu"}</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                        placeholder="Let us know how we can help you"
                                        required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> 
                                    {language === "AR"
                            ? `رسالتك `
                            : language === "EN"
                                ? `Your Message`
                                : "Mesajın"}
                                    </label>
                                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" className="py-3 hvr-grow px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                {language === "AR"
                            ? ` أرسل`
                            : language === "EN"
                                ? `Send Message`
                                : "Mesaj gönder"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;