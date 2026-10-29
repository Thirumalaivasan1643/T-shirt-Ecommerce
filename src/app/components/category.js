"use client";

import React from "react";
import Image from "next/image";
import poppins from "../font/poppins";

function Category() {
  const categories = [
    { name: "Men", image: "/Men.png", bg: "bg-[#ead9ca]" },
    { name: "Women", image: "/Women.png", bg: "bg-[#ffdada]" },
    { name: "Oversized", image: "/Oversized.png", bg: "bg-[#dcebf3]" },
  ];

  return (
    <div
      className={`${poppins.className} hidden md:hidden sm:hidden xl:block 2xl:block w-full px-20 py-10 bg-[#F5F5F5]`}
    >

      <div className="grid grid-cols-3  gap-16">
        {categories.map((item) => (
          <div
  key={item.name}
  className={`relative w-full overflow-hidden rounded-lg ${item.bg}`}
>
 <Image
  src={item.image}
  alt={item.name}
  width={600}
  height={400}
  className="h-[230px] w-full object-cover"
  sizes="30vw"
   loading="eager"
/>
 

            <div className="absolute left-5 top-1/2 z-10 -translate-y-1/2">
              <h2 className="text-xl font-bold text-black">{item.name}</h2>

              <p className="group mt-2 flex w-fit cursor-pointer items-center gap-2 text-md text-gray-700">
                <span className="transition-all duration-300 ease-in-out group-hover:text-orange-600 group-hover:translate-x-1">
                  Explore Now
                </span>

                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-orange-600">
                  →
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
