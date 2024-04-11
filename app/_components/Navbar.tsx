'use client';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Container from './Container';
import Image from 'next/image';

const NAV_ITEMS = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Trust',
    href: '/trust',
  },
  {
    name: 'Vision',
    href: '/vision',
  },
  {
    name: 'Gallery',
    href: '/gallery',
  },
];

const Navbar = () => {
  React.useEffect(() => {
    const rzpPaymentForm = document.getElementById('rzp_payment_form');

    if (!rzpPaymentForm?.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.async = true;
      script.dataset.payment_button_id = 'pl_Nvb3brpZuNraY7';
      rzpPaymentForm?.appendChild(script);
    }
  }, []);

  return (
    <nav className="h-[70px] lg:h-[88px] border-b-[1px] border-eco-500 px-5 lg:px-[60px] w-full flex items-center">
      <Container>
        <div className="flex items-center justify-between w-full">
          <Link href={'/'}>
            <div className="flex gap-1 items-center">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={48}
                height={48}
                className="w-7 h-7 lg:w-12 lg:h-12"
              />
              <h1 className="text-[24px] lg:text-[36px] font-bold text-eco-500">
                WEAVEINDIA
              </h1>
            </div>
          </Link>
          {/* <div className="flex gap-8">
            {NAV_ITEMS.map((item, idx) => (
              <Link key={idx + 1} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div> */}
          {/* <Button variant="solid">
            <Link href={'/donate'}>Donate</Link>
          </Button> */}
          <div className="lg:block hidden">
            <form id="rzp_payment_form" className="[&>span]:!flex"></form>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
