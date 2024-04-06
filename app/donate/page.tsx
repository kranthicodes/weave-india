import React from 'react';
import DonateFormSection from './components/DonateFormSection';
import Script from 'next/script';

export default function Donate() {
  return (
    <main className="flex flex-col pb-[160px]">
      <DonateFormSection />
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </main>
  );
}
