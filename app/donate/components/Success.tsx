import Image from 'next/image';
import React from 'react';

export default function Success() {
  return (
    <div className="flex pt-[146px] flex-row justify-center items-center">
      <div className="flex flex-col justify-center gap-9">
        <div className="flex flex-col text-center justify-center gap-2">
          <h1 className="text-2xl font-bold">Payment Successful!!!</h1>
          <p className="text-eco-600 text-base">
            Your donation fuels our mission for a greener planet.
            <br /> Let&apos;s weave a sustainable future together.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/assets/donate/success-globe.png"
            height={280}
            width={280}
            alt="success globe"
          />
        </div>
      </div>
    </div>
  );
}
