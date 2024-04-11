import React from 'react';
import Image from 'next/image';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi2';
import Container from '@/app/_components/Container';

export default function Testimonial() {
  return (
    <div className="w-full flex px-5 lg:px-[60px] pt-[340px] relative lg:py-[85px] 2xl:py-[105px] items-center justify-center bg-white">
      <Container>
        <div className="flex lg:flex-row flex-col w-full lg:relative justify-between mb-[127px]">
          <div className="lg:w-1/2 w-full flex justify-center">
            <Image
              className="absolute top-[-90px] lg:top-[-158px] 2xl:top-[-188px] lg:w-[447px] lg:h-[602px] 2xl:w-[527px] 2xl:h-[682px] w-[320px] h-[450px]"
              width={527}
              height={682}
              src="/assets/testimonials/item.png"
              alt="testimonials"
            />
          </div>
          <div className="flex flex-col lg:w-1/2 mt-[51px] justify-between gap-[69px]">
            <div className="flex flex-col gap-3 lg:min-h-[270px]">
              <div>
                <p className="text-[18px] lg:text-[22px] 2xl:text-[26px] leading-[150%]">
                  {
                    "The fashion industry may be fast, but our commitment to the planet is steadfast.Embrace the beauty of handloom textiles and the purity of natural dyes.By supporting handloom textiles and natural dyes, we're not just making a purchase – we're making a promise to protect our Earth."
                  }
                </p>
              </div>
              <div>
                <p className="text-base font-light italic leading-[150%] text-black">
                  — Ms. Sai Rupa Netha, Founder, WEAVEINDIA
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 hidden">
              <HiOutlineArrowLeft className="h-10 w-10 text-gray-400 cursor-pointer" />
              <HiOutlineArrowRight className="h-10 w-10 text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
