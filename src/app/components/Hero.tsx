import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-black w-full h-10">
        <p className="text-center text-white pt-2">
          Sign up and get 20% off to your first order. Sign Up Now
        </p>
      </div>
      <div>
        <h1 className="font-extrabold size-16 h-16 ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="pt-100%">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black text-white">Shop Now</button>
      </div>
      <div className="bg-black w-full h-32 flex ">
        <img className="h-2" src="vector1.png" alt="" />
        <img src="vector2.png" alt="" />
        <img src="vector3.png" alt="" />
        <img src="vector4.png" alt="" />
        <img src="vector5.png" alt="" />
        

      </div>
    </>
  );
};

export default Hero;
