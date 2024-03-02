import React from 'react';
import Image from 'next/image';

export default function Press() {
  return (
    <div className="w-full py-[52px] px-[146px] bg-[#EBF0EF] flex justify-center items-center">
      <div className="items-center justify-between flex w-full">
        <div className="flex-col justify-center items-center gap-[30px] flex">
          <Image
            width={70}
            height={60}
            src="/assets/press/natural-fabric.svg"
            alt="hero-img"
          />
          <div className="text-center max-w-[309px] text-black text-opacity-50 text-sm font-semibold">
            Cherish the soft embrace of nature with our natural fabrics.
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-[30px] flex">
          <Image
            width={70}
            height={70}
            src="/assets/press/natural-food.svg"
            alt="hero-img"
          />
          <div className="text-center max-w-[300px] text-black text-opacity-50 text-sm font-semibold">
            Wear the colors of the earth with our natural dye creations
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-[30px] flex">
          <Image
            width={70}
            height={70}
            src="/assets/press/cloth.svg"
            alt="hero-img"
          />
          <div className="text-center max-w-[332px] text-black text-opacity-50 text-sm font-semibold">
            Handwoven with Tradition, Crafted with Love
          </div>
        </div>
      </div>
    </div>
  );
}
