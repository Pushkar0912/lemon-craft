import React, { useEffect, useState } from 'react';

const HeroSection = React.forwardRef((_, ref) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={ref} id="aboutus" className="relative overflow-hidden">
      {/* Left part */}
      <div
        className={`flex flex-col h-full mx-auto px-[5vw] pt-[5vh] gap-2 ${
          scrollY > 100 ? 'animate-slide-up-hidden' : 'animate-slide-up'
        }`}
      >
        <h1 className="font-semibold text-left text-6xl md:text-8xl md:max-w-[33vw] md:leading-[139px]">
          Astro NFT
        </h1>
        <p className="grid justify-start mt-[16px] mx-[40px] max-w-[260px] gap-[32px] font-medium text-[11px] leading-[18px] text-grey-500">
          Exclusively for Genesis NFT Holders, our Astro NFT collection is the first metaverse wearable created for Everdome.
          <button className="bg-black text-white py-4">Connect your wallet</button>
        </p>
        <div className="mt-10 mx-[40px] flex flex-col gap-2">
          <span className="font-bold text-[36px] leading-[46px] whitespace-nowrap">
            9,999
          </span>
          <label className="font-medium text-[10px] leading-[13px] whitespace-nowrap">
            Collection Size
          </label>
        </div>
      </div>

      {/* Middle part */}
      <div
        className={`absolute inset-0 flex justify-center items-center z-0 ${
          scrollY > 100 ? 'animate-shrink-hide' : 'animate-scale-up'
        }  hidden lg:flex`}
      >
        <div className="bg-black w-[270px] h-[500px]"></div>
      </div>

      {/* Right part */}
      <p
        className={`absolute top-[50px] right-[170px] max-w-[200px] font-medium text-[11px] leading-[18px] text-[#111] ${
          scrollY > 100 ? 'animate-slide-up-hidden' : 'animate-slide-up'
        } hidden lg:flex`}
      >
        Distinctive, one of a kind metaverse wearables. Designed to be used during your Everdome City experience.
      </p>
    </section>
  );
});

export default HeroSection;
