import Container from '@/app/_components/Container';
import Image from 'next/image';
import React from 'react';

export default function ComingSoon() {
  return (
    <div className="w-full py-10 bg-white flex justify-center items-center">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-10 w-1/2">
            <div className="flex flex-col gap-12">
              <Image
                src="/assets/coming-soon/1.png"
                alt="1"
                width={300}
                height={483}
              />
              <Image
                src="/assets/coming-soon/2.png"
                alt="1"
                width={300}
                height={203}
              />
            </div>
            <div className="flex flex-col gap-12">
              <Image
                src="/assets/coming-soon/3.png"
                alt="1"
                width={300}
                height={255}
              />
              <Image
                src="/assets/coming-soon/4.png"
                alt="1"
                width={300}
                height={429}
              />
            </div>
          </div>
          <div className="flex w-1/2 justify-center">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="text-[64px] font-medium text-black text-left leading-[100%]">
                Coming
                <br />
                Soon!
              </h1>
              <p className="text-2xl leading-[150%]">
                Weaving Stories through Threads
                <br />
                Crafted with Love, Woven with
                <br />
                Tradition.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
