'use client';

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import poppins from '../font/poppins';
import { ShoppingBag, Heart, UserRound } from 'lucide-react';

function CountBadge({ count }) {
  if (!count) return null;

  return (
    <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold leading-none text-white">
      {count > 99 ? '99+' : count}
    </span>
  );
}

function Navbar() {
  const wishlist = useSelector((state) => state.shop.wishlist ?? []);
  const cart = useSelector((state) => state.shop.cart ?? []);

  const wishlistCount = wishlist.length;
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'Men', href: '/category/men' },
    { name: 'Women', href: '/category/women' },
    { name: 'New Arrivals', href: '/new-arrivals' },
  ];

  return (
    <div className={`${poppins.className}  `}>
      <div className="md:hidden sm:hidden hidden xl:block 2xl:block">
        <nav className="fixed top-0 left-0 z-50 w-full bg-[#F5F5F5]">
          <div className="flex h-20 w-full items-center justify-between px-20">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              THREAD<span className="text-orange-500">X</span>
            </Link>

            <div className="flex items-center gap-7">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-md font-medium text-gray-700 transition hover:text-orange-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/wishlist"
                aria-label={`Wishlist, ${wishlistCount} items`}
                className="relative rounded-full p-2 hover:bg-gray-200"
              >
                <Heart size={21} />
                <CountBadge count={wishlistCount} />
              </Link>

              <Link
                href="/login"
                aria-label="My account"
                className="rounded-full p-2 hover:bg-gray-200"
              >
                <UserRound size={21} />
              </Link>

              <Link
                href="/cart"
                aria-label={`Shopping cart, ${cartCount} items`}
                className="relative rounded-full p-2 hover:bg-gray-200"
              >
                <ShoppingBag size={22} />
                <CountBadge count={cartCount} />
              </Link>
            </div>
          </div>
        </nav>

        {/* Space for fixed navbar */}
        <div className="h-20" />
      </div>
    </div>
  );
}

export default Navbar;