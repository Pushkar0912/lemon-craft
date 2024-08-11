import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTwitter, faDiscord, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="text-white p-4 animate-nav-start delay-200">
      <div className="container mx-auto p-4 px-[30px] flex justify-between items-center animate-nav-start">
        <div className=" text-2xl text-black font-bold tracking-[15px] sm:tracking-[5px]">
          EVERDOME
        </div>
        <div className="flex items-center space-x-12 sm:space-x-5">
          <FontAwesomeIcon icon={faTelegram} size="sm" className="text-black cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} size="sm" className="text-black cursor-pointer" />
          <FontAwesomeIcon icon={faDiscord} size="sm" className="text-black cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} size="sm" className="text-black cursor-pointer" />
          <FontAwesomeIcon icon={faFacebook} size="sm" className="text-black cursor-pointer" />
          <button className="bg-black text-white py-3.5 px-7 text-xs font-semibold">
            Mint Astro NFT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
