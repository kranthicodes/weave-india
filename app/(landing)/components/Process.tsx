import React from 'react';
import Image from 'next/image';
import Container from '@/app/_components/Container';

export default function Process() {
  return (
    <div className="w-full flex px-5 lg:px-[60px] py-11 lg:py-[85px]  items-center justify-center bg-eco-500">
      <Container>
        <div className="flex flex-col gap-[64px] lg:gap-[75px] mb-20">
          <div className="flex lg:flex-row flex-col gap-6 lg:gap-[56px]">
            <div className="lg:w-[55%]">
              <h1 className="text-white text-[28px] lg:text-[48px] 2xl:text-[64px] font-medium leading-[120%]">
                Glimpses from the journey towards{' '}
                <br className="hidden lg:block" />
                World Handloom Day
              </h1>
            </div>
            <div className="lg:w-[45%] flex flex-col gap-8 justify-end">
              <div className="text-white text-2xl lg:text-xl 2xl:text-2xl font-normal leading-[150%]">
                Contribute and be a part of this Global cause!
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-[40px] justify-between">
            <div className="flex flex-col gap-[18px] max-w-[413px] w-full">
              <div className="flex relative">
                <Image
                  className="lg:w-[400px] lg:h-[271px] 2xl:w-[413px] 2xl:h-[284px]"
                  width={413}
                  height={284}
                  src="/assets/process/01.png"
                  alt="process"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white text-lg font-bold leading-[27px]">
                  Indonesia
                </div>
                <div className="text-white text-sm font-normal leading-[150%]">
                  We have successfully organized “WORLD WEAVERS CONFERENCE’ at
                  Bali, Indonesia. The event drew esteemed dignitaries,
                  including government representatives from India-Indonesia,
                  Padma Shree awardees, National awardees from India, renowned
                  fashion designers and talented weavers who showcased their
                  masterpieces.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] max-w-[413px] w-full">
              <div className="flex relative">
                <Image
                  className="lg:w-[400px] lg:h-[271px] 2xl:w-[413px] 2xl:h-[284px]"
                  width={413}
                  height={284}
                  src="/assets/process/02.png"
                  alt="process"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white text-lg font-bold leading-[27px]">
                  Malaysia
                </div>
                <div className="text-white text-sm font-normal leading-[21px]">
                  In the vibrant city of Kuala Lumpur, Malaysia, we witnessed a
                  powerful display of solidarity for World Handloom Day. Weavers
                  from diverse backgrounds came together to showcase their
                  unwavering support by unfurling a banner proclaiming &quot;We
                  Support World Handloom Day&quot; in front of the iconic KL
                  Tower.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] max-w-[413px] w-full">
              <div className="flex relative">
                <Image
                  className="lg:w-[400px] lg:h-[271px] 2xl:w-[413px] 2xl:h-[284px]"
                  width={413}
                  height={284}
                  src="/assets/process/03.png"
                  alt="process"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-white text-lg font-bold leading-[27px]">
                  Singapore
                </div>
                <div className="text-white text-sm font-normal leading-[21px]">
                  The spirit of World Handloom Day reverberated as weavers took
                  to the streets in a spirited rally. Against the backdrop of
                  Empress Place, they proudly displayed their commitment to
                  promoting sustainable fashion. The rally culminated at
                  Anderson Bridge, where their voices echoed the call for a
                  greener, cleaner future, woven with the threads of tradition
                  and innovation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
