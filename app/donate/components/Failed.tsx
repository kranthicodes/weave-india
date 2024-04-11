import Button from '@/app/_components/Button';
import Image from 'next/image';
import React from 'react';

export default function Failed({
  handleTryAgain,
}: {
  handleTryAgain: () => void;
}) {
  return (
    <div className="flex pt-[146px] flex-row justify-center items-center">
      <div className="flex flex-col justify-center gap-9">
        <div className="flex flex-col text-center justify-center gap-2">
          <h1 className="text-lg: font-bold">Payment Failed!!!</h1>
          <p className="text-eco-600 text-base">
            YUh-oh, Seems like there was an issue while
            <br /> processing your payment.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Button onClick={handleTryAgain} variant="solid">
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
