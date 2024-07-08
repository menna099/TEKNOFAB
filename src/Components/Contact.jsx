import Navbar from "./Navbar"
import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({ language, setLanguage }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    const [formState, setFormState] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [msg, setMsg] = useState("");

    useEffect(() => {
        emailjs.init("P8dGm3IeIYRGmEEx3");
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data via EmailJS
        emailjs
            .sendForm("service_vfjt0xw", "template_oc2xozk", e.target)
            .then(
                () => {
                    setMsg("Email Sent");
                    setFormState({
                        email: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    setMsg("Not Sent! Sign Up with EmailJS.");
                }
            );
    };

    return (

        <>
            <Navbar language={language} setLanguage={setLanguage} />
            
            <section className="contact py-10">
                <div className="px-2 sm:px-6 lg:px-8" data-aos="zoom-in">
                <div className="contact-heading-container mb-10">
                    <h2 className="Heading-title font-bold  bg-SecondColor p-3 text-center my-4 text-white">
                        {language === "AR"
                            ? ` تواصل معنا `
                            : language === "EN"
                                ? `Contact Us`
                                : "Bize Ulaşın"}
                    </h2>
                    </div>
                    <p className="text-black text-center">
                        {language === "AR"
                            ? `هل لديك مشكلة فنية؟ هل تريد إرسال تعليقات حول إحدى الميزات التجريبية؟ هل تحتاج إلى تفاصيل حول خطة أعمالنا؟ دعنا نعرف.`
                            : language === "EN"
                                ? `Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.`
                                : "Teknik bir sorun mu var? Bir beta özelliği hakkında geri bildirim mi göndermek istiyorsunuz? İş planımızla ilgili ayrıntılara mı ihtiyacınız var? Bilmemize izin ver"}
                    </p>
                </div>
           
            <div className="relative flex items-top mt-0 justify-center min-h-screen  sm:items-center sm:pt-0" data-aos="zoom-in">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-5 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                            <div className="p-6 contact-text mr-2 bg-gray-100 dark:bg-white rounded-lg">
                                <h1 className="text-3xl sm:text-3xl text-gray-800 dark:text-black text-center font-extrabold tracking-tight">
                                    {language === "AR"
                                        ? ` تواصل معنا `
                                        : language === "EN"
                                            ? `Get in Touch`
                                            : "Temasta olmak"}
                                </h1>
                                <p className="text-center text-lg sm:text-xl font-medium text-gray-600 dark:text-black mt-2">
                                    {language === "AR"
                                        ? ` املأ النموذج لبدء محادثة  `
                                        : language === "EN"
                                            ? `Fill in the form to start a conversation`
                                            : "Görüşme başlatmak için formu doldurun"}
                                </p>

                                <div className="flex items-center pb-5 mt-8 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold">
                                        Şehremini Mah.
                                        No: 9/A Fatih / İSTANBUL
                                    </div>
                                </div>

                                <div className="flex items-center pb-5  text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold">
                                        00905446546062 <br />
                                        00201110122012
                                    </div>
                                </div>

                                <div className="flex items-center pb-5  text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold ">
                                        sales@teknofab.com.tr
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold ">
                                        www.teknofab.com.tr
                                    </div>
                                </div>

                            </div>
                            <form action="#" className="space-y-8 bg-white p-5 rounded-lg" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-black"> {language === "AR"
                                        ? `بريدك الإلكتروني `
                                        : language === "EN"
                                            ? `Your Email:`
                                            : "E-postanız"}</label>
                                    <input type="email" id="email" name="email" value={formState.email}
                                        onChange={handleChange} className="shadow-sm navbar border border-gray-300 text-white text-sm rounded-lg focus:ring-SecondColor-500 focus:border-SecondColor-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-SecondColor-500 dark:focus:border-SecondColor-500 dark:shadow-sm-light" placeholder={language === "AR"
                                            ? ` name@gmail.com `
                                            : language === "EN"
                                                ? `name@gmail.com`
                                                : "isim@gmail.com"} required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> {language === "AR"
                                        ? `الموضوع `
                                        : language === "EN"
                                            ? `Subject`
                                            : "Konu"}</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="block p-3 w-full navbar text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-SecondColor-500 focus:border-SecondColor-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-SecondColor-500 dark:focus:border-SecondColor-500 dark:shadow-sm-light"
                                        placeholder={language === "AR"
                                            ? `اخبرنا كيف  يمكننا مساعدتك `
                                            : language === "EN"
                                                ? `Tell us how we can help you`
                                                : "Size nasıl yardımcı olabileceğimizi bize söyleyin"}
                                        required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                        {language === "AR"
                                            ? `رسالتك `
                                            : language === "EN"
                                                ? `Your Message`
                                                : "Mesajın"}
                                    </label>
                                    <textarea id="message" rows="6" name="message" value={formState.message}
                                        onChange={handleChange} className="block navbar p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-SecondColor-500 focus:border-SecondColor-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-SecondColor-500 dark:focus:border-SecondColor-500" placeholder={language === "AR"
                                            ? `اترك تعليقك....`
                                            : language === "EN"
                                                ? `Leave a comment...`
                                                : "Bir yorum bırakın..."}></textarea>
                                </div>
                                <button type="submit" className="btn-form py-3 hvr-grow px-5 text-sm  bg-SecondColor font-medium text-center text-white rounded-lg  sm:w-fit  focus:ring-4 focus:outline-none focus:ring-SecondColor-300  dark:focus:ring-SecondColor-800">
                                    {language === "AR"
                                        ? `ارسال`
                                        : language === "EN"
                                            ? `Send Message`
                                            : "Mesaj gönder"}
                                </button>
                                <div className="form-message">{msg && <span>{msg}</span>}</div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
            <Icons/>
        </>
    )
}
export default Contact;
