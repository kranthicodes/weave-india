import React from 'react';
import Image from 'next/image';

export default function Process() {
  return (
    <div className="w-full flex px-[60px] py-[165px] items-center justify-center bg-eco-500">
      <div className="flex flex-col gap-[38px]">
        <div className="flex gap-[56px]">
          <div className="w-full">
            <h1 className="text-white text-[64px] font-medium leading-[64px]">
              The process of beautiful & elegant fabrics
            </h1>
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="text-white text-2xl font-normal leading-9">
              From Thread to Fabric: The Artful Process of Handloom Weaving
            </div>
            <div className="text-white text-lg font-bold underline">
              How does it work?
            </div>
          </div>
        </div>
        <div className="flex gap-[40px] justify-between">
          <div className="flex flex-col gap-[18px] max-w-[413px]">
            <div className="flex relative">
              <Image
                width={413}
                height={284}
                src="/assets/process/dying.svg"
                alt="process"
              />
              <h1 className="text-white text-5xl font-bold leading-[48px] absolute top-[10px] left-[13px]">
                01
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-white text-lg font-bold leading-[27px]">
                Dying
              </div>
              <div className="text-white text-sm font-normal leading-[21px]">
                It is a crucial step that enhances the aesthetic appeal and
                allows for a wide range of colors and patterns in handloom
                textiles.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[18px] max-w-[413px]">
            <div className="flex relative">
              <Image
                width={413}
                height={284}
                src="/assets/process/weaving.svg"
                alt="process"
              />
              <h1 className="text-white text-5xl font-bold leading-[48px] absolute top-[10px] left-[13px]">
                02
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-white text-lg font-bold leading-[27px]">
                Weaving
              </div>
              <div className="text-white text-sm font-normal leading-[21px]">
                Weaving in handloom involves a meticulous process where yarns
                are resist-dyed before weaving, creating intricate patterns and
                designs with slight imperfections, showcasing the beauty of
                handcrafted textiles.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[18px] max-w-[413px]">
            <div className="flex relative">
              <Image
                width={413}
                height={284}
                src="/assets/process/fabric.svg"
                alt="process"
              />
              <h1 className="text-white text-5xl font-bold leading-[48px] absolute top-[10px] left-[13px]">
                03
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-white text-lg font-bold leading-[27px]">
                Fabric
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
    </div>
  );
}
