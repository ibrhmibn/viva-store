"use client";
import { Heart, ShoppingCart } from "lucide-react";
import { G, rp } from "@/lib/data";
import { Img, Stars } from "./ui";

export default function ProductCard({ p, onCart, onCheckout, wished, onWish }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-3 flex flex-col">
      <div className="relative rounded-xl bg-[#F4F4F5] aspect-square overflow-hidden">
        <span className="absolute left-2 top-2 z-10 text-white text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#EF6C57" }}>-{p.disc}%</span>
        <button onClick={onWish} aria-label="Wishlist" className="absolute right-2 top-2 z-10 bg-white/80 rounded-full p-1.5">
          <Heart size={14} className={wished ? "fill-[#EF6C57] text-[#EF6C57]" : "text-gray-500"} />
        </button>
        <Img src={p.img} alt={p.name} className="w-full h-full object-cover mix-blend-multiply" />
      </div>
      <h3 className="mt-3 text-sm font-medium text-[#1A1A1A] line-clamp-2 min-h-[40px]">{p.name}</h3>
      <div className="flex items-center gap-1 mt-1"><Stars n={p.rating} /><span className="text-xs text-gray-500">({new Intl.NumberFormat("id-ID").format(p.reviews)})</span></div>
      <div className="mt-2 flex items-baseline gap-2 flex-wrap">
        <span className="font-bold text-[#1A1A1A]">{rp(p.price)}</span>
        <span className="text-xs text-gray-500 line-through">{rp(p.old)}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={onCart} aria-label="Tambah ke keranjang" className="border rounded-lg px-3 py-2 hover:bg-[#D9E8D8] transition" style={{ borderColor: G, color: G }}><ShoppingCart size={16} /></button>
        <button onClick={onCheckout} className="flex-1 text-white text-sm font-medium rounded-lg py-2 hover:opacity-90 transition" style={{ background: G }}>Checkout</button>
      </div>
    </div>
  );
}

