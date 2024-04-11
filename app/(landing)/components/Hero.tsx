'use client';
import Container from '@/app/_components/Container';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  React.useEffect(() => {
    const rzpPaymentForm = document.getElementById('rzp_payment_form_hero');

    if (!rzpPaymentForm?.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.async = true;
      script.dataset.payment_button_id = 'pl_Nvb3brpZuNraY7';
      rzpPaymentForm?.appendChild(script);
    }
  }, []);

  return (
    <Container>
      <div className="flex flex-col lg:flex-row w-full mb-[95px] px-5 lg:px-0">
        <div className="lg:w-1/2 mt-[46px] lg:mt-[63px] flex flex-col gap-4 lg:gap-[56px] items-start">
          <h1 className="text-[48px] font-medium lg:text-[96px] leading-[115%] lg:leading-[110.4px]">
            Green <br className="hidden lg:block" />
            Fab <br />
            Revolution
          </h1>
          <h3 className="text-[20px] lg:text-[24px] leading-[150%] lg:leading-[36px] font-[300]">
            Support our Mission{' '}
            <span className="text-eco-500 font-semibold">
              World Handloom Day
            </span>
          </h3>
          <div className="mt-5 lg:mt-0">
            <form id="rzp_payment_form_hero" className="[&>span]:!flex"></form>
          </div>
        </div>
        <div className="lg:w-1/2 mt-[58px] lg:mt-[82px]">
          <div className="h-full w-full relative flex">
            <div className="relative left-0 lg:right-[192px]">
              <Image
                width={473}
                height={546}
                className="lg:w-[473px] lg:h-[546px] w-[237px] h-[274px]"
                src="/assets/hero-img-1.png"
                alt="hero-img"
              />
            </div>
            <div className="absolute right-0 top-[55%]">
              <Image
                width={385}
                height={331}
                className="lg:w-[385px] lg:h-[331px] w-[193px] h-[166px]"
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
