import useGlobalStore from '@/store/useGlobalStore';
import { useEffect, useState } from 'react';

type Offset = number;

interface StickyScrollProps {
  offset?: Offset;
}

function useStickyScroll({ offset = -100 }: StickyScrollProps = {}) {
  const { isSticky, setSticky } = useGlobalStore((state) => ({
    isSticky: state.isStickyActionBar,
    setSticky: state.setToggleStickyActionBar,
})); 

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
    const status = direction === 'down' && scrollY > 50  ? true : false
      if (status !== isSticky && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {

        setSticky(status);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [isSticky, setSticky]);
}

export default useStickyScroll;