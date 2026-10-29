"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check, Heart, Minus, Plus, ShoppingBag, Star, X } from "lucide-react";
import { toggleWishlist, addToCart } from "../redux/shopSlice";
import poppins from "../font/poppins";

// Placeholder tee image generated in the browser (no internet or hosting needed).
// Replace with real photo URLs when you have them, e.g. image: "https://.../savage.png"
const teeColors = ["#111827", "#C2410C", "#1D4ED8", "#15803D", "#7C3AED", "#BE123C", "#0F766E", "#A16207"];

const img = (name) => {
  const hash = [...name].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const color = teeColors[hash % teeColors.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750"><rect width="600" height="750" fill="#F3F4F6"/><path d="M200 130 L110 190 L60 330 L150 365 L180 310 L180 610 L420 610 L420 310 L450 365 L540 330 L490 190 L400 130 Q300 210 200 130 Z" fill="${color}"/><text x="300" y="440" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#FFFFFF">${name}</text><text x="300" y="690" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#6B7280">THREADX</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};


const products = [
  {
    id: 1,
    name: "Savage Graphic Tee",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "BESTSELLER",
    category: "Graphic Tees",
    gender: "Men",
  },
  {
    id: 2,
    name: "Anime Vibes Tee",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    price: 699,
    oldPrice: 999,
    badge: "TRENDING",
    category: "Anime",
    gender: "Women",
  },
  {
    id: 3,
    name: "No Limits Tee",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "NEW",
    category: "Graphic Tees",
    gender: "Men",
  },
  {
    id: 4,
    name: "Good Vibes Tee",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
    price: 499,
    oldPrice: 699,
    badge: "HOT",
    category: "Typography",
    gender: "Women",
  },
  {
    id: 5,
    name: "Mountain Escape Tee",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Streetwear",
    gender: "Men",
  },
  {
    id: 6,
    name: "Butterfly Art Tee",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Minimal",
    gender: "Women",
  },
  {
    id: 7,
    name: "Born Different Tee",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
    price: 699,
    oldPrice: 999,
    badge: "",
    category: "Typography",
    gender: "Men",
  },
  {
    id: 8,
    name: "Abstract Art Tee",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Graphic Tees",
    gender: "Women",
  },
  {
    id: 9,
    name: "Chaos Oversized Tee",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    price: 699,
    oldPrice: 999,
    badge: "TRENDING",
    category: "Oversized",
    gender: "Men",
  },
  {
    id: 10,
    name: "Tiger Edge Tee",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Streetwear",
    gender: "Women",
  },
  {
    id: 11,
    name: "Naruto Graphic Tee",
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=900&q=85",
    price: 699,
    oldPrice: 999,
    badge: "NEW",
    category: "Anime",
    gender: "Men",
  },
  {
    id: 12,
    name: "Space Explorer Tee",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Graphic Tees",
    gender: "Women",
  },
  {
    id: 13,
    name: "Stay Real Tee",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "HOT",
    category: "Typography",
    gender: "Men",
  },
  {
    id: 14,
    name: "Skull Art Tee",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Streetwear",
    gender: "Women",
  },
  {
    id: 15,
    name: "Anti Social Tee",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    price: 499,
    oldPrice: 699,
    badge: "",
    category: "Typography",
    gender: "Men",
  },
  {
    id: 16,
    name: "Dragon Graphic Tee",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    price: 699,
    oldPrice: 999,
    badge: "TRENDING",
    category: "Anime",
    gender: "Women",
  },
  {
    id: 17,
    name: "Smiley Drip Tee",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Oversized",
    gender: "Men",
  },
  {
    id: 18,
    name: "Bear Art Tee",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Graphic Tees",
    gender: "Women",
  },
  {
    id: 19,
    name: "Los Angeles Tee",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
    price: 699,
    oldPrice: 999,
    badge: "NEW",
    category: "Minimal",
    gender: "Men",
  },
  {
    id: 20,
    name: "Tokyo City Tee",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    price: 599,
    oldPrice: 799,
    badge: "",
    category: "Streetwear",
    gender: "Women",
  },
  
];


const genderFilters = ["All", "Men", "Women"];
const styleFilters = [
  "Graphic Tees",
  "Anime",
  "Oversized",
  "Minimal",
  "Typography",
  "Streetwear",
];

// Fixed: old list had both "2XL" and "XXL" (same size) and no "L"
const sizes = ["S", "M", "L", "XL", "XXL"];

const PAGE_SIZE = 15;

const badgeStyles = {
  BESTSELLER: "bg-red-600 text-white",
  TRENDING: "bg-orange-500 text-white",
  NEW: "bg-blue-600 text-white",
  HOT: "bg-yellow-400 text-black",
};

export default function Collection() {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.shop.wishlist ?? []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quantities, setQuantities] = useState({});
  const [needsSize, setNeedsSize] = useState(null); // product id missing a size
  const [toast, setToast] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  const matching =
    activeCategory === "All"
      ? products
      : activeCategory === "Men" || activeCategory === "Women"
        ? products.filter((p) => p.gender === activeCategory)
        : products.filter((p) => p.category === activeCategory);

  const filteredProducts = showAll ? matching : matching.slice(0, PAGE_SIZE);

  const selectSize = (productId, size) => {
    // Only one product can have a selected size at a time.
    // Selecting on a new card clears the previous card back to normal.
    setSelectedSizes({ [productId]: size });
    setQuantities((prev) => ({ [productId]: prev[productId] || 1 }));
    setNeedsSize(null);
  };

  const changeQuantity = (productId, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + amount),
    }));
  };

  const handleCart = (product) => {
    const size = selectedSizes[product.id];

    if (!size) {
      setNeedsSize(product.id);
      return;
    }

    const quantity = quantities[product.id] || 1;
    dispatch(addToCart({ product, size, quantity }));
    setToast(`${product.name} (${size}) × ${quantity} added to cart`);
  };

  const chip = (label) => (
    <button
      key={label}
      type="button"
      onClick={() => {
        setActiveCategory(label);
        setShowAll(false);
      }}
      aria-pressed={activeCategory === label}
      className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
        activeCategory === label
          ? "bg-black text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className={poppins.className}>
      <section className="w-full bg-white px-4 py-10 text-black sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Trending Collection
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Most loved styles right now
            </p>
          </div>
        </div>

        {/* Filters */}
        <div
          className="-mx-4 mb-8 flex items-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filter products"
        >
          {genderFilters.map(chip)}
          <span className="mx-1 h-5 w-px shrink-0 bg-gray-300" aria-hidden="true" />
          {styleFilters.map(chip)}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((product) => {
            const liked = wishlist.includes(product.id);
            const selectedSize = selectedSizes[product.id];
            const quantity = quantities[product.id] || 1;
            const sizeMissing = needsSize === product.id;

            const discount = Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            );

            return (
              <article key={product.id} className="group flex min-w-0 flex-col">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading={product.id <= 5 ? "eager" : "lazy"}
                    className="h-full w-full object-contain p-3 mix-blend-multiply transition duration-300 motion-reduce:transition-none group-hover:scale-105"
                  />

                  {product.badge && (
                    <span
                      className={`absolute left-2 top-2 rounded-md px-2 py-1 text-[10px] font-bold leading-none ${
                        badgeStyles[product.badge] ?? "bg-black text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => dispatch(toggleWishlist(product.id))}
                    aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
                    aria-pressed={liked}
                    className={`absolute right-2 top-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 ${
                      liked ? "text-red-500" : "text-black"
                    }`}
                  >
                    <Heart size={17} fill={liked ? "currentColor" : "none"} />
                  </button>

                  <span className="absolute bottom-2 left-2 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-orange-600">
                    {discount}% OFF
                  </span>
                </div>

                {/* Info */}
                <div className="mt-3 flex items-start justify-between gap-2">
                  <h3 className="truncate text-sm font-semibold">{product.name}</h3>
                  <div className="flex shrink-0 items-center gap-1 text-xs text-gray-600">
                    <Star size={12} className="fill-orange-400 text-orange-400" />
                    {(4.5 + (product.id % 5) / 10).toFixed(1)}
                  </div>
                </div>

                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-base font-bold">₹{product.price}</span>
                  <del className="text-xs text-gray-400">₹{product.oldPrice}</del>
                  <span className="text-xs text-gray-400">
                    ({product.id * 12 + 30})
                  </span>
                </div>

                {/* Sizes */}
                <div
                  className="mt-3 flex flex-wrap gap-1.5"
                  role="group"
                  aria-label={`Size for ${product.name}`}
                >
                  {sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={`${product.id}-${size}`}
                        type="button"
                        onClick={() => selectSize(product.id, size)}
                        aria-pressed={isSelected}
                        className={`h-8 min-w-8 cursor-pointer rounded-md border px-2 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 ${
                          isSelected
                            ? "border-black bg-black text-white"
                            : sizeMissing
                              ? "border-red-400 bg-white text-black"
                              : "border-gray-200 bg-white text-black hover:border-black"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>

                {sizeMissing && (
                  <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                    Pick a size to continue
                  </p>
                )}

                {/* Quantity + Add to cart */}
                <div className="mt-3 flex items-stretch gap-2">
                  {selectedSize && (
                    <div className="flex items-center rounded-lg border border-gray-200">
                      <button
                        type="button"
                        onClick={() => changeQuantity(product.id, -1)}
                        disabled={quantity <= 1}
                        aria-label={`Decrease quantity for ${product.name}`}
                        className="flex h-full w-8 cursor-pointer items-center justify-center hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-5 text-center text-sm font-semibold">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(product.id, 1)}
                        aria-label={`Increase quantity for ${product.name}`}
                        className="flex h-full w-8 cursor-pointer items-center justify-center hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => handleCart(product)}
                    className="flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black px-3 py-2.5 text-[13px] font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    <ShoppingBag size={15} />
                    Add to cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500">
          <span>
            Showing {filteredProducts.length} of {matching.length} products
          </span>

          {matching.length > PAGE_SIZE && (
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="cursor-pointer rounded-full border border-black px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              {showAll ? "Show less" : "View all products"}
            </button>
          )}
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-xl bg-black px-4 py-3 text-sm text-white shadow-xl"
        >
          <Check size={18} className="shrink-0 text-green-400" />
          <span className="flex-1">{toast}</span>
          <button
            type="button"
            onClick={() => setToast("")}
            aria-label="Close message"
            className="cursor-pointer text-gray-300 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}