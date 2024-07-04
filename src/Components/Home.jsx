import Cards from "./Cards";
import Footer from "./Footer";
import Hero from "./Hero";
import Icons from "./Icons";
import Navbar from "./Navbar";

export default function Home ({language,setLanguage}){
    return (
        <>
        <Navbar language={language} setLanguage={setLanguage}/>
        <Hero language={language}/>
        <Cards language={language}/>
        <Footer/> 
        <Icons/>
        </>
        );
}