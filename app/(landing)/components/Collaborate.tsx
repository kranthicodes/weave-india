import Button from '@/app/_components/Button';
import Container from '@/app/_components/Container';
import React from 'react';

export default function Collaborate() {
  return (
    <div className="w-full py-[100px] bg-eco-600 text-white flex justify-center items-center">
      <Container>
        <div className="flex flex-col gap-20">
          <h1 className="text-[64px] leading-[100%] font-medium text-left">
            Want to collaborate
            <br />
            with WEAVEINDIA?
          </h1>
          <div className="flex justify-between">
            <Button variant="outline">
              Schedule a call
            </Button>
            <h1 className="text-6xl font-bold text-white opacity-50 leading-[100%]">
              weaveindiatrust@gmail.com
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}
