import Image from "next/image";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const MeetOurTeam = () => {
  return (
    // {/* Meet Our Team Section */}

    <div>
      {/* Meet Our Team */}
      <h2
        className={`${montserrat.className} text-center font-bold text-[40px] text-myDark mt-20 hover:text-blue-500 `}
      >
        Meet Our Team
      </h2>

      {/* team */}
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center mx-auto px-0 md:px-0 lg:px-32  space-y-20">
        {/* first row */}
        <div className="items-center px-1 space-y-3 mt-20">
          <Image
            src={"/images/team/team-1.jpg"}
            alt="team-1"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
            Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>

          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="items-center px-1 space-y-3">
          <Image
            src="/images/team/team-2.jpg"
            alt="team-2"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
            Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>

          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="items-center px-1 space-y-3">
          <Image
            src="/images/team/team-3.jpg"
            alt="team-3"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
           Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>
          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="items-center px-1 space-y-3">
          <Image
            src="/images/team/team-4.png"
            alt="team-4"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
           Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>

          {/* social icons */}
          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="items-center px-1  space-y-3">
          <Image
            src="/images/team/team-5.jpg"
            alt="team-5"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
            Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>

          {/* social icons */}
          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="items-center px-1 space-y-3">
          <Image
            src="/images/team/team-6.jpg"
            alt="team-6"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
            Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>
          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>

        {/* third row */}
        <div className="items-center px-1 space-y-3">
          <Image
            src="/images/team/team-7.png"
            alt="team-7"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
            Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>

          {/* social icons */}
          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="items-center px-1 space-y-3">
          <Image
            src="/images/team/team-8.jpg"
            alt="team-8"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
           Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>

          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="items-center px-1 space-y-3">
          <Image
            src="/images/team/team-9.jpg"
            alt="team-9"
            width={316}
            height={231}
            className="items-center px-1 mx-auto w-[316px] h-[231px] object-cover transform transition duration-500 hover:scale-110"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark hover:text-blue-500`}
          >
            Username
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey hover:text-blue-500`}
          >
            Profession
          </h6>
          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/images/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook1.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/images/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram1.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/images/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter1.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
