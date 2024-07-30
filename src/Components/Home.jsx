import Cards from "./Cards";
import Footer from "./Footer";
import Hero from "./Hero";
import Icons from "./Icons";
import Navbar from "./Navbar";
import Services from "./Services";
import AboutVideo from "./AboutVideo";

export default function Home ({language,setLanguage}){
    return (
        <>
        <Navbar language={language} setLanguage={setLanguage}/>
        <Hero language={language}/>
        
        <Services language={language}/>
        <AboutVideo language={language}/>
        <Footer/> 
        <Icons/>
        </>
        );
}