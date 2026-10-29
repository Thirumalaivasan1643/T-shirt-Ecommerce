
"use client";

import React, { useState } from "react";
import {
  Gem,
  Truck,
  PackageCheck,
  Headset,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import poppins from "../font/poppins";

const benefits = [
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Best fabric, lasting comfort",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹999",
  },
  {
    icon: PackageCheck,
    title: "Easy Returns",
    description: "2 day hassle free returns",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "We're always here for you",
  },
];

export default function WhyChooseUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    // Connect your newsletter API here.
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className={`${poppins.className}`}>
      <div className="md:hidden sm:hidden hidden xl:block 2xl:block">
        <section className="w-full overflow-hidden bg-white px-6 py-10 text-black lg:px-12 xl:px-16">
          <div className="mx-auto max-w-[1500px]">

            {/* Benefits */}
            <div className="grid grid-cols-4 gap-5 border-b border-gray-100 pb-10">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex min-w-0 items-center gap-4"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50 transition duration-300 hover:bg-orange-50">
                      <Icon
                        size={30}
                        strokeWidth={1.5}
                        className="text-black"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold xl:text-base">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500 xl:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="mt-8 flex items-center justify-between gap-10 rounded-2xl bg-[#f5f5f5] px-8 py-9 xl:px-12">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold tracking-[4px] text-orange-600">
                  STAY IN STYLE
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight xl:text-4xl">
                  Join Our Newsletter
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 xl:text-base">
                  Get exclusive offers, new arrivals and styling
                  tips straight to your inbox.
                </p>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="flex w-[48%] max-w-xl shrink-0 items-center gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="h-12 min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

                <button
                  type="submit"
                  className="flex h-12 shrink-0 cursor-pointer items-center justify-center gap-3 rounded-xl bg-black px-5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600"
                >
                  Subscribe
                  <ArrowRight size={17} />
                </button>
              </form>
            </div>

            {/* Subscription message */}
            {message && (
              <p
                role="status"
                className="mt-4 flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle size={17} className="text-green-600" />
                {message}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
