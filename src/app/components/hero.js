
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className="md:hidden hidden sm:hidden xl:block 2xl:block">
      <section className="relative aspect-[5/2] w-full overflow-hidden">
        <Image
          src="/Banner For Tshirt.png"
          alt="Premium T-shirt collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Shop Now Button */}
        <div className="absolute bottom-12 left-56 z-10">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-[#FF5A00]"
          >
            SHOP NOW →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;
