import React from 'react';
import Container from './Container';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full py-20 bg-[#EBF0EF] flex justify-center items-center">
      <Container>
        <div className="flex flex-col w-full gap-[74px]">
          <div className="flex justify-between">
            <h2 className="text-[32px] leading-[112%] text-eco-600">
              We&apos;re on a Mission to
              <br /> create a “Green Fab Revolution”
            </h2>
            <div className="flex gap-10">
              <FooterItem>
                <p className="leading-[125%] text-xs">
                  WEAVEINDIA is providing sustainable fashion at its finest with
                  India’s heritage by elevating the style with handwoven
                  perfection.
                </p>
                <p className="font-bold text-xs leading-[100%]">
                  © WEAVEINDIA 2024
                </p>
              </FooterItem>
              <FooterItem>
                <p className="leading-[100%] font-medium text-xs">
                  <Link href={'/donate'}>Donate</Link>
                </p>
              </FooterItem>
              <FooterItem>
                <p className="leading-[100%] font-medium text-xs">
                  +91 7382557788
                </p>
                <p className="leading-[100%] font-medium text-xs">
                  weaveindiatrust@gmail.com
                </p>
              </FooterItem>
              <FooterItem>
                <p className="leading-[100%] font-medium text-xs">
                  Terms of Use
                </p>
                <p className="leading-[100%] font-medium text-xs">
                  Privacy Policy
                </p>
              </FooterItem>
            </div>
          </div>
          <div>
            <h1 className="text-black text-[96px] font-bold leading-[100%]">
              WEAVEINDIA
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

function FooterItem({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="w-[187px] flex flex-col border-t-[2px] gap-6 border-t-eco-600 pt-6 text-eco-600">
      {children}
    </div>
  );
}
