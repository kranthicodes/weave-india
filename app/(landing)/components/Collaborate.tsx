import Button from '@/app/_components/Button';
import Container from '@/app/_components/Container';
import React from 'react';

export default function Collaborate() {
  return (
    <div className="w-full py-12 px-5 lg:px-0 lg:py-[100px] bg-eco-600 text-white flex justify-center items-center">
      <Container>
        <div className="flex flex-col lg:gap-20 gap-12">
          <h1 className="text-[24px] lg:text-[54px] 2xl:text-[64px] leading-[115%] lg:leading-[100%] font-medium text-left">
            Want to collaborate
            <br />
            with WEAVEINDIA?
          </h1>
          <div className="flex lg:flex-row flex-col lg:justify-between gap-[64px] lg:gap-0">
            <Button className="w-fit h-[40px] lg:h-[56px]" variant="outline">
              Contact Us
            </Button>
            <h1 className="text-[20px] lg:text-[54px] 2xl:text-6xl font-bold text-white opacity-50 leading-[100%]">
              weaveindiatrust@gmail.com
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}
