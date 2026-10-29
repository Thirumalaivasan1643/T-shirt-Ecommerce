"use client";

import React, { useState } from "react";
import Link from "next/link";

// UI icons: lucide-react
import { ArrowRight, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

// Brand / social icons: react-icons (lucide-react does not include brand logos)
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import poppins from "../font/poppins";

const shopLinks = [
  { name: "All Products", href: "/shop" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Graphic Tees", href: "/shop?category=graphic-tees" },
  { name: "Oversized Tees", href: "/shop?category=oversized" },
  { name: "New Arrivals", href: "/new-arrivals" },
];

const helpLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faq" },
  { name: "Shipping Policy", href: "/shipping-policy" },
  { name: "Return & Exchange", href: "/returns" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
];

const socials = [
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/" },
  { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/" },
  { name: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/" },
  { name: "X (Twitter)", icon: FaXTwitter, href: "https://x.com/" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    // Connect your newsletter API here.
    setMessage("Thank you for joining the THREADX community!");
    setEmail("");
  };

  return (
    <div className={`${poppins.className}`}>
      <div className="md:hidden sm:hidden hidden xl:block 2xl:block">
        <footer className="w-full overflow-hidden bg-[#111111] text-white">
          {/* Newsletter strip */}
          <div className="border-b border-white/10">
            <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-6 py-10 md:px-10 lg:flex-row lg:items-center lg:justify-between xl:px-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[3px] text-orange-500">
                  Join the movement
                </p>

                <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
                  Style that speaks.
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Get new drops, exclusive deals and streetwear inspiration.
                </p>
              </div>

               
            </div>

            {message && (
              <p
                role="status"
                className="mx-auto max-w-[1500px] px-6 pb-4 text-sm text-orange-400 md:px-10 xl:px-16"
              >
                {message}
              </p>
            )}
          </div>

          {/* Main footer */}
          <div className="mx-auto grid max-w-[1500px] grid-cols-4 gap-8 px-6 py-12 md:px-10 xl:gap-12 xl:px-16">
            {/* Brand */}
            <div className="col-span-4 lg:col-span-1">
              <Link
                href="/"
                className="inline-flex cursor-pointer items-center text-3xl font-black tracking-tight"
              >
                THREAD
                <span className="text-orange-500">X</span>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
                Express yourself through style. Discover graphic tees,
                oversized fits and everyday streetwear made for you.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-orange-500 hover:bg-orange-600 hover:text-white"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Shop links */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-[2px]">
                Shop
              </h3>

              <ul className="mt-5 space-y-4">
                {shopLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="cursor-pointer text-sm text-gray-400 transition hover:text-orange-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer service */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-[2px]">
                Customer Care
              </h3>

              <ul className="mt-5 space-y-4">
                {helpLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="cursor-pointer text-sm text-gray-400 transition hover:text-orange-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div className="col-span-4 lg:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-[2px]">
                Get in Touch
              </h3>

              <div className="mt-5 space-y-5">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-orange-500" />

                  <div>
                    <p className="text-xs text-gray-500">Email us</p>
                    <a
                      href="mailto:your-email@example.com"
                      className="mt-1 block break-all text-sm text-gray-300 transition hover:text-orange-400"
                    >
                      your-email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-orange-500" />

                  <div>
                    <p className="text-xs text-gray-500">Call us</p>
                    <a
                      href="tel:+910000000000"
                      className="mt-1 block text-sm text-gray-300 transition hover:text-orange-400"
                    >
                      +91 XXXXX XXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-orange-500" />

                  <div>
                    <p className="text-xs text-gray-500">Our location</p>
                    <p className="mt-1 text-sm text-gray-300">India</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
              >
                Contact our team
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-6 py-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between md:px-10 xl:px-16">
              <p>© THREADX. All rights reserved.</p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/privacy-policy"
                  className="cursor-pointer transition hover:text-white"
                >
                  Privacy
                </Link>

                <Link
                  href="/terms"
                  className="cursor-pointer transition hover:text-white"
                >
                  Terms
                </Link>

                <span className="flex items-center gap-2">
                  Made for your everyday style
                  <span className="text-orange-500">♥</span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}