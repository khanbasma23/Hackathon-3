import React from 'react';
import Image from 'next/image';
import { TiTick } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GiSofa } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { TbCircleNumber2Filled } from "react-icons/tb";

const FQA = () => {
  return (
    <div className="w-full">
      {/* Top Header Section */}
      <div className="w-full h-[45px] px-4 md:px-12 lg:px-24 bg-[#272343] flex justify-between items-center text-white">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <TiTick className="text-xl" />
          Free Shipping On All Orders Over $50
        </div>
        <div className="flex items-center gap-6 text-sm opacity-70">
          <div className="flex items-center">Eng <IoIosArrowDown className="ml-2" /></div>
          <div>Faqs</div>
          <div className="flex items-center">
            <AiOutlineExclamationCircle className="text-2xl md:text-4xl mr-2" /> Need Help
          </div>
        </div>
      </div>

      {/* Middle Header Section */}
      <div className="w-full py-4 bg-[#F0F2F3] flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24">
        <div className="flex items-center gap-2">
          <GiSofa className="text-4xl md:text-6xl text-[#56d3be]" />
          <div className="text-lg md:text-xl">Comforty</div>
        </div>
        <div className="flex items-center gap-4 bg-white rounded-lg px-4 py-2 mt-4 md:mt-0">
          <FiShoppingCart className="text-2xl md:text-4xl" />
          <div className="flex items-center text-sm md:text-xl">
            Cart <TbCircleNumber2Filled className="text-[#56d3be] ml-2 text-lg md:text-2xl" />
          </div>
        </div>
      </div>

      {/* FQA Image */}
      <div className='w-full flex justify-center mt-8'>
        <Image src="/image/FQA.svg" alt="Questions" width={600} height={400} />
      </div>

      {/* Footer Section */}
      <div className="bg-[#FFFFFF] w-full py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 px-4 md:px-12 lg:px-24">
          <Image src="/image/Chairy.svg" alt="Footer Logo" width={200} height={100} />
          <Image src="/image/footer-text.svg" alt="Footer Text" width={100} height={50} />
          <Image src="/image/Frametext.svg" alt="Frame Text" width={120} height={60} />
          <Image src="/image/Newsletter.svg" alt="Newsletter" width={250} height={150} className="border border-gray-200 rounded-md" />
        </div>
        <div className="w-full mt-8">
          <Image src="/image/Frame 69.svg" alt="Footer Bottom" width={1920} height={200} />
        </div>
      </div>
    </div>
  );
};

export default FQA;
