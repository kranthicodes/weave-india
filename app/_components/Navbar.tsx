import Link from 'next/link';
import React from 'react';
import Button from './Button';

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
    <nav className="h-[88px] border-b-[1px] border-eco-500 flex items-center px-[60px] justify-between">
      <h1 className="text-[36px] font-bold">Weaveindia</h1>
      <div className="flex gap-8">
        {NAV_ITEMS.map((item, idx) => (
          <Link key={idx + 1} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
      <Button variant="solid">Donate</Button>
    </nav>
  );
};

export default Navbar;
