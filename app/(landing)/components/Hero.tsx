import Button from '@/app/_components/Button';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-row w-full px-[60px] mb-[54px]">
      <div className="w-1/2 mt-[63px] flex flex-col gap-[56px] items-start">
        <h1 className="text-[96px] leading-[110.4px]">
          Reviving <br />
          Indian <br />
          Heritage.
        </h1>
        <h3 className="text-[24px] leading-[36px] font-[300]">
          Weaving Stories through Threads <br />
          Crafted with Love, Woven with
          <br />
          Tradition
        </h3>
        <Button className="text-[18px]" variant="solid">
          Know more
        </Button>
      </div>
      <div className="w-1/2 mt-[83px]">
        <div className="h-full w-full relative flex justify-end">
          <div className="relative right-[192px]">
            <Image
              width={473}
              height={546}
              src="/assets/hero-img-1.png"
              alt="hero-img"
            />
          </div>
          <div className="absolute right-0 top-[50%]">
            <Image
              width={385}
              height={331}
              src="/assets/hero-img-2.png"
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
