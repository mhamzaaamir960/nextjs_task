import React from "react";

function ShowContent() {
  return (
    <div className=" max-w-[1000px] w-full min-h-[500px] md:min-h-[700px] bg-white border border-gray-300 rounded-xl">
      <div className="h-[70px] text-black font-medium text-xl sm:text-2xl flex items-center border-b border-gray-300 pl-5  ">
        Name of the content
      </div>
      <div className="w-full min-h-fit bg-white p-5">
            <div className="w-full h-[200px] text-black font-medium  text-center text-lg sm:text-xl flex justify-center items-center  border border-gray-300 rounded-xl">
                <p>You{"'"}ve got knowledge, it{"'"}s time to share it!</p>
            </div>
      </div>
    </div>
  );
}

export default ShowContent;
