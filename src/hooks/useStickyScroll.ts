import { useEffect, useRef, useState } from 'react';

type Offset = number;

interface StickyScrollProps {
  offset?: Offset;
}

interface StickyResult {
  isSticky: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

function useStickyScroll({ offset = 0 }: StickyScrollProps = {}): StickyResult {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsSticky(ref.current.getBoundingClientRect().top <= offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return { isSticky, ref };
}

export default useStickyScroll;