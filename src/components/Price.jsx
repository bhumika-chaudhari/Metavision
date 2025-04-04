import React, { useContext } from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { ThemeContext } from "../components/ThemeContext"; // ✅ Import ThemeContext

const Price = () => {
  const { theme } = useContext(ThemeContext); // ✅ Consume context

  return (
    <>
      <div className="mt-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          Pricing
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className={`p-10 border rounded-xl shadow-md transition-all duration-300 
                ${theme === "dark" ? "bg-neutral-900 border-neutral-700 text-white" : "bg-white border-neutral-300 text-black"}`}>
              <p className="text-4xl mb-8 font-semibold">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-amber-400 to-red-700 text-transparent bg-clip-text text-xl mb-4 ml-3">
                    (Most Popular)
                  </span>
                )}
              </p>

              <p className="mt-3">
                <span className="text-5xl mt-6 mr-2 font-bold">{option.price}</span>
                <span className="text-neutral-500 dark:text-neutral-400 tracking-tight">/Month</span>
              </p>

              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-green-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 mt-20 
                  p-5 tracking-tight text-xl bg-orange-700 hover:bg-orange-900 border border-orange-700 
                  rounded-lg transition duration-300 text-white no-underline shadow-md"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Price;
