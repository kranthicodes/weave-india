import Button from '@/app/_components/Button';
import Container from '@/app/_components/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-row w-full mb-[95px]">
        <div className="w-1/2 mt-[63px] flex flex-col gap-[56px] items-start">
          <h1 className="text-[96px] leading-[110.4px]">
            Green <br />
            Fab <br />
            Revolution
          </h1>
          <h3 className="text-[24px] leading-[36px] font-[300]">
            Support out Mission{' '}
            <span className="text-eco-500 font-semibold">
              World Handloom Day
            </span>
          </h3>
          <Link href={'/donate'}>
            <Button className="text-[18px]" variant="solid">
              Donate now
            </Button>
          </Link>
        </div>
        <div className="w-1/2 mt-[82px]">
          <div className="h-full w-full relative flex justify-end">
            <div className="relative right-[192px]">
              <Image
                width={473}
                height={546}
                src="/assets/hero-img-1.png"
                alt="hero-img"
              />
            </div>
            <div className="absolute right-0 top-[55%]">
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
    </Container>
  );
};

export default Hero;
