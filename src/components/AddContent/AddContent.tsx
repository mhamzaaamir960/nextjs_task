"use client";
import React from "react";
import { RxVideo } from "react-icons/rx";
import { IoImageOutline, IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdOutlineTextFields } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";
import { Button } from "@mui/material";

function AddContent() {
  const buttons = [
    { icon: <RxVideo />, label: "Video" },
    { icon: <IoImageOutline />, label: "Image" },
    { icon: <HiOutlineSpeakerWave />, label: "Audio" },
    { icon: <IoDocumentTextOutline />, label: "Document" },
    { icon: <MdOutlineTextFields />, label: "Text" },
    { icon: <RiLinksFill />, label: "Resources" },
  ];

  return (
    <div className=" md:w-[500px] lg:w-[600px] w-full h-fit bg-white border border-gray-300 rounded-xl order-first md:order-last ">
      <div className="h-[60px] text-black font-medium text-xl sm:text-2xl flex items-center border-b border-gray-300 pl-5">
        Add content
      </div>
      <div className="w-full md:w-full min-h-fit bg-transparent rounded-b-xl p-5 ">
        <div className="w-full h-fit text-black font-medium text-xl grid grid-cols-2 xs:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-3 ">
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{
                width: { xs: "100px", md: "100px", xl: "130px" },
                height: { xs: "80px", md: "80px", xl: "110px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #d1d5db",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "gray.100",
                },
                borderRadius: "12px",
              }}
            >
              <span style={{ color: "#3b82f6", fontSize: "2em" }}>
                {button.icon}
              </span>

              <span
                style={{
                  fontSize: "15px",
                  color: "#4b5563",
                  textTransform: "capitalize",
                }}
              >
                {button.label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddContent;
