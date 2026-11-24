"use client";
import { useMemo, useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu, Check, ShieldCheck, Truck, RotateCcw, ArrowRight } from "lucide-react";
import { G, U, PRODUCTS, CATS, serif } from "@/lib/data";
import { Img, Logo } from "@/components/ui";
import ProductCard from "@/components/ProductCard";
import CheckoutModal from "@/components/CheckoutModal";

export default function Page() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(null);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([1]);
  const [checkout, setCheckout] = useState(null);

  const list = useMemo(() => PRODUCTS.filter((p) =>
    (!cat || p.cat === cat) && (p.name + p.cat).toLowerCase().includes(q.toLowerCase())), [q, cat]);

  const addCart = (p) => setCart((c) => c.find((i) => i.p.id === p.id)
    ? c.map((i) => (i.p.id === p.id ? { ...i, qty: i.qty + 1 } : i))
    : [...c, { p, qty: 1, variant: p.variants[0] }]);
  const buyNow = (p) => setCheckout([{ p, qty: 1, variant: p.variants[0] }]);
  const openCart = () => setCheckout(cart);
  const closeCheckout = () => setCheckout(null);
  const setItems = (items) => { setCheckout(items); setCart(items); };
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen text-[#1A1A1A]" style={{ background: "#F9FAF9", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      <div className="text-white text-[11px] sm:text-xs py-2 px-4 text-center" style={{ background: G }}>
        Gratis Ongkir untuk Pesanan di Atas Rp 150.000 &nbsp;|&nbsp; Garansi Pengembalian 30 Hari &nbsp;|&nbsp; Pembayaran Aman
      </div>

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4 md:gap-8">
          <Logo />
          <div className="flex-1 hidden sm:flex items-center bg-[#F4F4F5] rounded-full pl-5 pr-1.5 py-1.5 max-w-2xl mx-auto">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari produk, merek, dan lainnya..." className="flex-1 bg-transparent outline-none text-sm" />
            <button aria-label="Cari" className="rounded-full p-2.5 text-white" style={{ background: G }}><Search size={16} /></button>
          </div>
          <div className="flex items-center gap-5 ml-auto text-xs">
            {[{ i: User, l: "Account" }, { i: Heart, l: "Wishlist", b: wish.length }, { i: ShoppingCart, l: "Cart", b: cartCount, f: openCart }].map(({ i: I, l, b, f }) => (
              <button key={l} onClick={f} className="relative flex flex-col items-center gap-0.5">
                <I size={22} color={G} />
                {b > 0 && <span className="absolute -top-1.5 right-0 text-[10px] text-white rounded-full w-4 h-4 flex items-center justify-center" style={{ background: G }}>{b}</span>}
                <span className="hidden md:block">{l}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="sm:hidden px-4 pb-3"><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari produk..." className="w-full bg-[#F4F4F5] rounded-full px-4 py-2 text-sm outline-none" /></div>
        <nav className="max-w-7xl mx-auto px-4 pb-3 flex items-center gap-6 overflow-x-auto text-sm">
          <button onClick={() => setCat(null)} className="flex items-center gap-2 text-white rounded-lg px-4 py-2 whitespace-nowrap" style={{ background: G }}><Menu size={16} />Semua Kategori</button>
          {["Home", "Shop", "Deals", "New Arrivals", "Brands", "Track Order"].map((n, i) => (
            <a key={n} href="#top" className={`whitespace-nowrap ${i === 0 ? "font-semibold border-b-2 pb-0.5" : "text-gray-700"}`} style={i === 0 ? { borderColor: G } : {}}>{n}</a>
          ))}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-8" id="top">
        <section className="rounded-3xl overflow-hidden grid md:grid-cols-2 relative" style={{ background: "#EBE7DF" }}>
          <div className="p-8 md:p-14 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl leading-tight" style={serif}>Elevate Your<br />Everyday</h1>
            <p className="mt-4 text-gray-600 max-w-sm">Temukan produk berkualitas di setiap kategori — dipilih untuk gaya hidup Anda.</p>
            <button onClick={() => document.getElementById("picks").scrollIntoView({ behavior: "smooth" })} className="mt-6 self-start text-white rounded-lg px-6 py-3 text-sm font-medium flex items-center gap-2" style={{ background: G }}>Belanja Sekarang <ArrowRight size={16} /></button>
            <div className="mt-8 flex flex-wrap gap-5 text-xs text-gray-700">
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} />Kualitas Premium</span>
              <span className="flex items-center gap-1.5"><Check size={16} />Harga Terbaik</span>
              <span className="flex items-center gap-1.5"><User size={16} />Dipercaya 10rb+ Pelanggan</span>
            </div>
          </div>
          <div className="relative min-h-[280px] md:min-h-[420px] grid grid-cols-2 grid-rows-2 gap-3 p-4 md:p-6">
            <Img src={U("photo-1553531384-cc64ac80f931", 700)} alt="Koper" className="row-span-2 w-full h-full object-cover rounded-2xl" />
            <Img src={U("photo-1505740420928-5e560c06d30e", 500)} alt="Headphone" className="w-full h-full object-cover rounded-2xl" />
            <Img src={U("photo-1485955900006-10f4d324d411", 500)} alt="Tanaman" className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute right-6 top-6 text-white text-center rounded-lg px-4 py-3 shadow-lg" style={{ background: G }}>
              <div className="text-[10px] tracking-widest">SUMMER SALE</div>
              <div className="text-[11px]">UP TO</div>
              <div className="text-2xl font-bold leading-none" style={serif}>40%</div>
              <div className="text-[11px]">OFF</div>
            </div>
          </div>
        </section>

        <section className="flex justify-between gap-3 overflow-x-auto pb-1">
          {CATS.map(({ n, i: I, bg }) => (
            <button key={n} onClick={() => setCat(cat === n ? null : n)} className="flex flex-col items-center gap-2 min-w-[76px]">
              <span className="w-16 h-16 rounded-full flex items-center justify-center transition" style={{ background: bg, outline: cat === n ? `2px solid ${G}` : "none", outlineOffset: 2 }}><I size={26} color={G} strokeWidth={1.5} /></span>
              <span className="text-xs text-gray-700 text-center">{n}</span>
            </button>
          ))}
        </section>

        <section id="picks" className="bg-white rounded-3xl p-5 md:p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl" style={serif}>Top Picks For You {cat && <span className="text-sm text-gray-500" style={{ fontFamily: "inherit" }}>· {cat}</span>}</h2>
            {(cat || q) && <button onClick={() => { setCat(null); setQ(""); }} className="text-sm underline" style={{ color: G }}>Reset filter</button>}
          </div>
          {list.length === 0 ? (
            <p className="text-center text-gray-500 py-12">Tidak ada produk yang cocok. Coba kata kunci atau kategori lain.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {list.map((p) => (
                <ProductCard key={p.id} p={p} wished={wish.includes(p.id)}
                  onWish={() => setWish((w) => (w.includes(p.id) ? w.filter((x) => x !== p.id) : [...w, p.id]))}
                  onCart={() => addCart(p)} onCheckout={() => buyNow(p)} />
              ))}
            </div>
          )}
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          {[{ t: "Fresh Styles Just In", bg: "#F1E9DA", img: "photo-1584917865442-de89df76afd3" },
            { t: "Make Your Space Better", bg: "#ECE8E3", img: "photo-1555041469-a586c61ea9bc" },
            { t: "Upgrade Your Lifestyle", bg: "#DFEAF3", img: "photo-1523275335684-37898b6baf30" }].map((b) => (
            <div key={b.t} className="rounded-2xl p-6 flex items-center justify-between overflow-hidden" style={{ background: b.bg }}>
              <div>
                <h3 className="text-xl leading-snug max-w-[140px]" style={serif}>{b.t}</h3>
                <button onClick={() => document.getElementById("picks").scrollIntoView({ behavior: "smooth" })} className="mt-3 text-sm flex items-center gap-1" style={{ color: G }}>Belanja <ArrowRight size={14} /></button>
              </div>
              <Img src={U(b.img, 300)} alt={b.t} className="w-28 h-28 rounded-xl object-cover" />
            </div>
          ))}
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl border p-5 text-sm">
          {[{ i: Truck, t: "Gratis Ongkir", s: "Pesanan di atas Rp 150.000" }, { i: RotateCcw, t: "Pengembalian Mudah", s: "Garansi 30 hari" },
            { i: ShieldCheck, t: "Pembayaran Aman", s: "Checkout 100% terenkripsi" }, { i: User, t: "Bantuan 24/7", s: "Kami siap membantu" }].map(({ i: I, t, s }) => (
            <div key={t} className="flex items-center gap-3"><I size={26} color={G} strokeWidth={1.5} /><div><div className="font-semibold">{t}</div><div className="text-xs text-gray-500">{s}</div></div></div>
          ))}
        </section>
      </main>

      <footer className="text-white mt-8" style={{ background: G }}>
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div><Logo light /><p className="mt-4 text-white/70 max-w-xs">Toko serba ada untuk produk berkualitas di setiap kategori. Live better with Viva.</p></div>
          {[{ h: "Shop", l: ["All Categories", "New Arrivals", "Best Sellers", "Deals", "Gift Cards"] },
            { h: "Customer Service", l: ["Track Order", "Returns & Refunds", "Shipping Info", "FAQ", "Contact Us"] },
            { h: "Company", l: ["About Us", "Careers", "Blog", "Affiliate Program", "Sustainability"] }].map((c) => (
            <div key={c.h}><h4 className="font-semibold mb-3">{c.h}</h4><ul className="space-y-2 text-white/70">{c.l.map((x) => <li key={x}>{x}</li>)}</ul></div>
          ))}
        </div>
        <div className="border-t border-white/15 py-4 text-center text-xs text-white/60">© 2026 Viva. Hak cipta dilindungi.</div>
      </footer>

      {checkout && <CheckoutModal items={checkout} setItems={setItems} onClose={closeCheckout} />}
    </div>
  );
}
