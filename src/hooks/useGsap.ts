import { useRef, useLayoutEffect } from 'react';
import { gsap, Power3 } from "gsap";

interface IGsapSettings {
  [key: string]: any;
}


function useGsapFrom(settings: IGsapSettings) {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (boxRef?.current) {
      const box = boxRef.current;
      gsap.from(box, {
        duration: 0.8,
        delay: 0.2,
        ease: Power3.easeInOut,
        ...settings
      });
    }
  }, [settings]);

  return boxRef;
}

export { useGsapFrom };