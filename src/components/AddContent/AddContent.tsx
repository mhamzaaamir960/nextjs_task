import React from "react";
import { RxVideo } from "react-icons/rx";
import { IoImageOutline, IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdOutlineTextFields } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";

function AddContent() {
  return (
    <div className=" md:w-[400px] lg:w-[600px] w-full h-fit  bg-white border border-gray-300 rounded-xl  order-first md:order-last mt-10 md:mt-0">
      <div className="h-[60px] text-black font-medium text-xl sm:text-2xl flex items-center border-b border-gray-300 pl-5">
        Add content{" "}
      </div>
      <div className="w-full min-h-fit bg-transparent rounded-b-xl p-5">
        <div className="w-full h-fit  text-black font-medium text-xl flex flex-wrap justify-center items-center  gap-5">
          {/* for video */}
          <button className="w-[90px] h-[70px] lg:w-[110px] lg:h-[90px] xl:w-[150px] xl:h-[120px] bg-white hover:bg-gray-50  cursor-pointer flex  flex-col justify-center items-center border boder-gray-500 rounded-xl ">
            <RxVideo className="text-blue-500 text-[28px] lg:text-[34px] " />
            <p className="text-[16px] lg:text-[18px] text-gray-700">Video</p>
          </button>
          {/* for image */}
          <button className="w-[90px] h-[70px] lg:w-[110px] lg:h-[90px] xl:w-[150px] xl:h-[120px] bg-white hover:bg-gray-50  cursor-pointer flex  flex-col justify-center items-center border boder-gray-500 rounded-xl">
            <IoImageOutline className="text-blue-500 text-[28px] lg:text-[34px] " />
            <p className="text-[16px] lg:text-[18px] text-gray-700">Image</p>
          </button>
          {/* for image */}
          <button className="w-[90px] h-[70px] lg:w-[110px] lg:h-[90px] xl:w-[150px] xl:h-[120px] bg-white hover:bg-gray-50  cursor-pointer flex  flex-col justify-center items-center border boder-gray-500 rounded-xl">
            <HiOutlineSpeakerWave className="text-blue-500 text-[28px] lg:text-[34px] " />
            <p className=" text-[16px] lg:text-[18px] text-gray-700">Audio</p>
          </button>
          {/* for image */}
          <button className="w-[90px] h-[70px] lg:w-[110px] lg:h-[90px] xl:w-[150px] xl:h-[120px] bg-white hover:bg-gray-50  cursor-pointer flex  flex-col justify-center items-center border boder-gray-500 rounded-xl">
            <IoDocumentTextOutline className="text-blue-500 text-[28px] lg:text-[34px] " />
            <p className="text-[16px] lg:text-[18px] text-gray-700">Document</p>
          </button>
          {/* for image */}
          <button className="w-[90px] h-[70px] lg:w-[110px] lg:h-[90px] xl:w-[150px] xl:h-[120px] bg-white hover:bg-gray-50  cursor-pointer flex  flex-col justify-center items-center border boder-gray-500 rounded-xl">
            <MdOutlineTextFields className="text-blue-500 text-[28px] lg:text-[34px] " />
            <p className="text-[16px] lg:text-[18px] text-gray-700">Text</p>
          </button>
          {/* for image */}
          <button className="w-[90px] h-[70px] lg:w-[110px] lg:h-[90px] xl:w-[150px] xl:h-[120px] bg-white hover:bg-gray-50  cursor-pointer flex  flex-col justify-center items-center border boder-gray-500 rounded-xl">
            <RiLinksFill className="text-blue-500 text-[28px] lg:text-[34px] " />
            <p className="text-[16px] lg:text-[18px] text-gray-700">Resources</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddContent;
