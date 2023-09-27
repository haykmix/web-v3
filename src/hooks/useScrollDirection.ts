import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the current scroll position is greater than the previous one
      if (currentScrollY > prevScrollY) {
        setIsScrollingUp(false); // Scrolling down
      } else {
        setIsScrollingUp(true); // Scrolling up
      }

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return isScrollingUp
};


