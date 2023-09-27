import { useEffect, useState } from "react";

export const useScrollPosition = (scroll: number) => {

  const [isScrolled, setIsScrolled] = useState(false);
  // const [scrollPositionBefore, setScrollPosition] = useState(0);
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check the current scroll position
      const scrollPosition = window.scrollY;
      // setScrollPosition(scrollPosition);

      // Check if the scroll position is greater than 100px
      if (scrollPosition > scroll) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;

}