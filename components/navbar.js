import Image from "next/image";
import Logo from "../public/logo.png";
const Navbar = () => {
  return (
    <div className="w-full fixed top-0 h-20 bg-transparent backdrop-blur-sm flex flex-row items-center justify-between px-44">
      <div>
        <Image
          width={100}
          height={150}
          src={Logo}
          className="rounded-xl overflow-hidden"
        />
      </div>
      <div className="flex flex-row gap-4 items-center text-white">
        <div className="font-bold">Home</div>
        <div>About Us</div>
        <div>Benefit</div>
        <div>Portofolio</div>
        <div>Blog</div>
      </div>
      <div>
        <button className="bg-gradient-to-r from-green-400/80 to-green-700/80 w-24 h-8 rounded-md font-semibold text-white ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
