import React from "react";
import { features } from "../constants";
const Featuresection = () => {
  return (
    <>
      <div className="relative mt-10 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase">
            Feature
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-5 lg:mt-10 tracking">
            Easily Build
            <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
              {" "}
              Your Code{" "}
            </span>
          </h2>
          <div className="flex flex-wrap mt-5 lg:mt-5 mr-5 ml-5">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="flex ">
                  <div className="flex mx-6 h-10 w-10 p-2 text-orange-700 justify-center items-center rounded-full bg-neutral-900">
                    {feature.icon}
                  </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md text-left p-2 mb-20 text-neutral-500">{feature.description}</p>
                </div>
               </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featuresection;
