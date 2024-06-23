import React from "react";
import A from "../../assets/png/apple.png";
import K from "../../assets/png/kiwi.png";
import lm from "../../assets/png/lemon.png";
import leaf from "../../assets/png/leaf.png";
import tm from "../../assets/png/tomato.png";
import PrimaryButton from "./../Shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative ">
        <div>
          <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
            Taste the Healthy Difference
          </h1>
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p>
                  We know that <span className="text-primary">time</span> is the
                  greatest value in the modern world.Our healthy meal plan
                  delivery service Good Food in Miami is the answer for those
                  who want to eat healthily, saving time for buying food and
                  preparing delicious, healthy meals.
                </p>
              </div>
              <div></div>
            </div>
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div></div> 
              <div>
                  <p>
                    We know that <span className="text-primary">time</span> is
                    the greatest value in the modern world.Our healthy meal plan
                    delivery service Good Food in Miami is the answer for those
                    who want to eat healthily, saving time for buying food and
                    preparing delicious, healthy meals.
                  </p>
                </div>
           
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 sm:mt-14 ">
          <PrimaryButton/>
          </div>
        </div>
        <div
        data-aos="fade-right"
         className="absolute top-5 -left-16  sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img src={leaf} alt="leaf"  className="max-w-[160px]"/>
        </div>
        <div 
        data-aos="fade-right"
        className="absolute -bottom-16 -left-16  sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
        <img src={tm} alt="leaf"  className="max-w-[200px]"/>
        </div>
        <div 
        data-aos="fade-left"
        className="absolute top-10 -right-16  sm:right-20  opacity-50 sm:opacity-100">
        <img src={lm} alt="leaf"  className="max-w-[200px]"/>
        </div>
        <div 
        data-aos="fade-right"
        className="hidden sm:block absolute bottom-0 right-0 ">
        <img src={A} alt="apple"  className="max-w-[200px]"/>
        </div>
        <div 
        className="absolute top-1/2  -translate-x-1/2 -translate-y-1 left-1/3 opacity-50 sm:opacity-100">
        <img src={K} alt="apple"  className="max-w-[180px]"/>
        </div>
      </div>
    </>
  );
};

export default Banner;
