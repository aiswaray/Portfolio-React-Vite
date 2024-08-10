
import { useState, useEffect } from 'react';
import { IoArrowUp } from 'react-icons/io5'; 
import './BackToTop.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState (false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Adjust this value based on when you want the button to appear
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          <IoArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;