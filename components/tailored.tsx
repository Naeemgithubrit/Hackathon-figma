import { Montserrat } from "next/font/google";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const Tailored = () => {
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto my-8 space-y-8 mt-12">
        <p
          className={`${montserrat.className}  font-normal text-sm text-myGrey mt-4 px-6 lg:px-0 hover:text-blue-500`}
        >
          What we do
        </p>

        <div className="w-full lg:w-[469px] h-[40px] items-center px-4 md:px-0 lg:px-0">
          <h1
            className={`${montserrat.className} font-bold text-[30px] text-myDark hover:text-blue-500`}
          >
            Innovation tailored for you
          </h1>
        </div>
        <ul className="flex justify-center gap-5 pt-10 md:pt-0 lg:pt-0 hover:text-blue-500">
          <li>Home</li>
          <IoIosArrowForward className="mt-1 hover:text-blue-500" />
          <li>Team</li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-2 lg:space-x-2 pt-12 ">
        <div>
          {/* Large screen */}
          <Image
            src="/images/team/hero-1.png" // Corrected image path
            alt="hero-1"
            className="hidden md:block object-cover w-full h-auto md:w-[700px] md:h-[530px] lg:w-[700px] lg:h-[530px] transform transition duration-500 hover:scale-110"
            width={700}
            height={530}
          />
          {/* Small screen */}
          <Image
            src="/images/team/hero-sm.png" // Corrected image path
            alt="hero-sm"
            className="block md:hidden object-cover w-[413px] h-[530px] transform transition duration-500 hover:scale-110"
            width={413}
            height={530}
          />
        </div>
        <div className="flex flex-row md:flex-col lg:flex-col space-y-[10px]">
          {/* Large screen image */}
          <Image
            src="/images/team/hero-2.png"
            alt="hero-2"
            className="hidden md:block object-cover w-[361px] h-[260px] transform transition duration-500 hover:scale-110" // Hidden on small screens
            width={361}
            height={260}
          />
          {/* Small screen image */}
          <Image
            src="/images/team/hero-sm-2.png"
            alt="hero-sm-2"
            className="block md:hidden  w-full h-auto mr-2 transform transition duration-500 hover:scale-110" // Hidden on larger screens
            width={204}
            height={260}
          />
          {/* Large screen image */}
          <Image
            src="/images/team/hero-3.png"
            alt="hero-3"
            className="hidden md:block object-cover w-[361px] h-[260px] transform transition duration-500 hover:scale-110" // Hidden on small screens
            width={361}
            height={260}
          />
          {/* Small screen image */}
          <Image
            src="/images/team/hero-sm-3.png"
            alt="hero-sm-3"
            className="block md:hidden  w-full h-auto transform transition duration-500 hover:scale-110" // Hidden on larger screens
            width={204}
            height={260}
          />
        </div>

        <div className="flex flex-row md:flex-col lg:flex-col space-y-[10px]">
          {/* Large screen image */}
          <Image
            src="/images/team/hero-4.png"
            alt="hero-4"
            className="hidden md:block object-cover w-[361px] h-[260px] transform transition duration-500 hover:scale-110" // Hidden on small screens
            width={361}
            height={260}
          />
          {/* Small screen image */}
          <Image
            src="/images/team/hero-sm-4.png"
            alt="hero-sm-4"
            className="block md:hidden object-cover w-full h-auto mr-2 transform transition duration-500 hover:scale-110" // Hidden on larger screens
            width={204}
            height={260}
          />
          {/* Large screen image */}
          <Image
            src="/images/team/hero-5.png"
            alt="hero-5"
            className="hidden md:block object-cover w-[361px] h-[260px] transform transition duration-500 hover:scale-110" // Hidden on small screens
            width={361}
            height={260}
          />
          {/* Small screen image */}
          <Image
            src="/images/team/hero-sm-5.png"
            alt="hero-sm-5"
            className="block md:hidden object-cover w-full h-auto transform transition duration-500 hover:scale-110" // Hidden on larger screens
            width={204}
            height={260}
          />
        </div>
      </div>
    </div>
  );
};

export default Tailored;