import React from "react";

const ButtonSquareSolid = ({ 
  bgColor = "bg-blue-29a8f1", 
  hoverColor = "hover:bg-blue-0e90da", 
  textColor = "text-white", 
  text = "Get Started", 
  href = "#" 
}) => {
  return (
    <a href={href} className="inline-block w-full">
      <button
        className={`w-full cursor-pointer ${textColor} ${bgColor} ${hoverColor} focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-[10px] text-sm px-11 py-2.5 text-center dark:${bgColor} dark:${hoverColor} dark:focus:ring-blue-300`}
      >
        {text}
      </button>
    </a>
  );
};

export default ButtonSquareSolid;