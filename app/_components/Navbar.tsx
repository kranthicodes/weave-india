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
  return (
    <nav className="h-[88px] border-b-[1px] border-eco-500 px-[60px] w-full flex items-center">
      <Container>
        <div className="flex items-center justify-between w-full">
          <Link href={'/'}>
            <div className="flex gap-1 items-center">
              <Image src="/assets/logo.svg" alt="logo" width={48} height={48} />
              <h1 className="text-[36px] font-bold text-eco-500">WEAVEINDIA</h1>
            </div>
          </Link>
          {/* <div className="flex gap-8">
            {NAV_ITEMS.map((item, idx) => (
              <Link key={idx + 1} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div> */}
          <Button variant="solid">
            <Link href={'/donate'}>Donate</Link>
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
