import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Herosection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col items-center mt-6 lg:mt-15 transition-all duration-300 ${
      theme === "dark" ? "bg-black text-white" : "bg-white text-black"
    }`}>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        MetaVision build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center max-w-4xl">
        MetaVision provides cutting-edge build tools for developers, streamlining the development workflow.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className={"no-underline px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white"}
        >
          Start Here
        </a>
        <a
          href="#"
          className={`py-3 px-4 mx-3 rounded-md border no-underline ${
            theme === "dark" ? "border-white text-white" : "border-black text-black"
          }`}
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-10 justify-center items-center w-full px-4">
        <video
          autoPlay
          loop
          muted
          className={`rounded-lg w-full md:w-1/2 max-w-[500px] border-4 transition-all duration-300 border-orange-700 shadow-orange-400 shadow-lg mx-2 my-4`}
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className={"rounded-lg w-full md:w-1/2 max-w-[500px] border-4 transition-all duration-300 border-orange-700 shadow-orange-400 shadow-lg mx-2 my-4"}
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Herosection;
