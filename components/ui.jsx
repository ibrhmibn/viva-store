"use client";
import { useState } from "react";
import { ShoppingBag, Leaf, Star } from "lucide-react";
import { G, serif } from "@/lib/data";

export const Img = ({ src, alt, className }) => {
  const [bad, setBad] = useState(false);
  return bad ? (
    <div className={`${className} flex items-center justify-center bg-[#E5E7E5]`}><ShoppingBag className="text-gray-400" /></div>
  ) : (
    <img src={src} alt={alt} className={className} loading="lazy" onError={() => setBad(true)} />
  );
};

export const Logo = ({ light }) => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <ShoppingBag size={34} strokeWidth={1.5} color={light ? "#fff" : G} />
      <Leaf size={14} className="absolute left-2.5 top-3" color={light ? "#A3C4A8" : "#4E8B5F"} fill={light ? "#A3C4A8" : "#4E8B5F"} />
    </div>
    <div className="leading-none">
      <div className="text-2xl tracking-wide" style={{ ...serif, color: light ? "#fff" : G }}>VIVA</div>
      <div className="text-[8px] tracking-[0.25em]" style={{ color: light ? "#A3C4A8" : "#6B7280" }}>LIVE BETTER</div>
    </div>
  </div>
);

export const Stars = ({ n }) => (
  <span className="inline-flex">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} className={s <= n ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />)}</span>
);

