import React, { useState ,useEffect} from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiArrowUp } from "react-icons/hi";

export default function Icons() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener('scroll', function(){
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    
  }, []);
  return (
    <>
      <a
        className="whats hvr-pulse"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=201110122012"

      >
        <IoLogoWhatsapp />
      </a>
      {isVisible && (
        <HiArrowUp 
          className="hvr-pulse bg-SecondColor text-white rounded-full scroll-to-top" 
          onClick={handleClick} 
        />
      )}
    </>
  );
}