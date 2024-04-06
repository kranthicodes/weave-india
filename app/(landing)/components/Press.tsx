import React from 'react';
import Image from 'next/image';

export default function Press() {
  return (
    <div className="w-full py-[52px] px-[146px] bg-[#EBF0EF] flex justify-center items-center">
      <div className="items-center gap-[104px] justify-center flex w-full">
        <div className="flex-col justify-center items-center gap-[30px] flex min-w-[300px]">
          <Image
            width={70}
            height={60}
            src="/assets/press/natural-fabric.svg"
            alt="hero-img"
          />
          <div className="text-center max-w-[309px] text-black text-opacity-50 text-sm font-semibold">
            Global Adoption of Natural Fabrics
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-[30px] flex min-w-[300px]">
          <Image
            width={70}
            height={70}
            src="/assets/press/natural-food.svg"
            alt="hero-img"
          />
          <div className="text-center max-w-[300px] text-black text-opacity-50 text-sm font-semibold">
            Mitigation of Global Warming
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-[30px] flex min-w-[300px]">
          <Image
            width={70}
            height={70}
            src="/assets/press/cloth.svg"
            alt="hero-img"
          />
          <div className="text-center max-w-[332px] text-black text-opacity-50 text-sm font-semibold">
            Advancement of Sustainable Fashion
          </div>
        </div>
      </div>
    </div>
  );
}
