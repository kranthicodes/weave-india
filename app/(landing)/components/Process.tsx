import React from 'react';
import Image from 'next/image';
import Container from '@/app/_components/Container';

export default function Process() {
  return (
    <div className="w-full flex px-[60px] py-[85px]  items-center justify-center bg-eco-500">
      <Container>
        <div className="flex flex-col gap-[75px] mb-20">
          <div className="flex gap-[56px]">
            <div className="w-[55%]">
              <h1 className="text-white text-[64px] font-medium leading-[120%]">
                Glimpses from the journey towards <br />
                World Handloom Day
              </h1>
            </div>
            <div className="w-[45%] flex flex-col gap-8 justify-end">
              <div className="text-white text-2xl font-normal leading-[150%]">
                Contribute and be a part of this Global cause!
              </div>
            </div>
          </div>
          <div className="flex gap-[40px] justify-between">
            <div className="flex flex-col gap-[18px] max-w-[413px]">
              <div className="flex relative">
                <Image
                  width={413}
                  height={284}
                  src="/assets/process/01.png"
                  alt="process"
                />
                <h1 className="text-white text-5xl font-bold leading-[48px] absolute top-[10px] left-[13px]">
                  01
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white text-lg font-bold leading-[27px]">
                  Indonesia
                </div>
                <div className="text-white text-sm font-normal leading-[21px]">
                  We have successfully organized “WORLD WEAVERS CONFERENCE’ at
                  Bali, Indonesia.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] max-w-[413px]">
              <div className="flex relative">
                <Image
                  width={413}
                  height={284}
                  src="/assets/process/02.png"
                  alt="process"
                />
                <h1 className="text-white text-5xl font-bold leading-[48px] absolute top-[10px] left-[13px]">
                  02
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white text-lg font-bold leading-[27px]">
                  Malaysia
                </div>
                <div className="text-white text-sm font-normal leading-[21px]">
                  Weaving in handloom involves a meticulous process where yarns
                  are resist-dyed before weaving, creating intricate patterns
                  and designs with slight imperfections, showcasing the beauty
                  of handcrafted textiles.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] max-w-[413px]">
              <div className="flex relative">
                <Image
                  width={413}
                  height={284}
                  src="/assets/process/03.png"
                  alt="process"
                />
                <h1 className="text-white text-5xl font-bold leading-[48px] absolute top-[10px] left-[13px]">
                  03
                </h1>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white text-lg font-bold leading-[27px]">
                  Singapore
                </div>
                <div className="text-white text-sm font-normal leading-[21px]">
                  Ikat handloom fabric boasts a mesmerizing allure with its
                  vibrant patterns, blending tradition and contemporary elegance
                  seamlessly. Each piece tells a unique story, showcasing the
                  artistry and skill of the weavers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
