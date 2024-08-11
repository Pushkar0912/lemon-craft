import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Videofile from "../assets/vp9.webm";

const Astronaut = React.forwardRef((props, ref) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const newScale = 1 + scrollPosition * 0.001; 
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 flex items-center justify-center ml-28 mt-16 pl-28 pr-0 z-10">
      <div
        ref={containerRef}
        className="relative transition-transform ease duration-75"
        style={{ transform: `scale(${scale})` }}
      >
        <ReactPlayer
          url={Videofile}
          width="210px"
          height="auto"
          playing
          loop
          muted
          playsinline
        />
      </div>
    </div>
  );
});

export default Astronaut;
