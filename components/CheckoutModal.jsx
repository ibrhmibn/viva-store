"use client";
import { useState } from "react";
import { X, Minus, Plus, Check, Loader2, CheckCircle2 } from "lucide-react";
import { G, rp, serif, COURIERS, PAYS } from "@/lib/data";
import { Img } from "./ui";

export default function CheckoutModal({ items, setItems, onClose }) {
  const [name, setName] = useState("Budi Santoso");
  const [addr, setAddr] = useState("Jl. Merdeka No. 45, Jakarta Pusat 10110");
  const [courier, setCourier] = useState("reg");
  const [pay, setPay] = useState("Virtual Account");
  const [protect, setProtect] = useState(true);
  const [status, setStatus] = useState("form");
  const [invoice, setInvoice] = useState("");

  const subtotal = items.reduce((s, i) => s + i.p.price * i.qty, 0);
  const ship = subtotal === 0 ? 0 : subtotal >= 150000 && courier === "reg" ? 0 : COURIERS.find((c) => c.id === courier).p;
  const fee = protect && subtotal ? 12500 : 0;
  const total = subtotal + ship + fee;

  const upd = (id, patch) => setItems(items.map((i) => (i.p.id === id ? { ...i, ...patch } : i)).filter((i) => i.qty > 0));
  const pay_ = () => {
    setStatus("loading");
    setTimeout(() => {
      setInvoice("INV/" + new Date().getFullYear() + "/VIVA/" + Math.floor(10000000 + Math.random() * 89999999));
      setStatus("done");
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl" style={serif}>{status === "done" ? "Pesanan Berhasil" : "Ringkasan Checkout"}</h2>
          <button onClick={onClose} aria-label="Tutup"><X size={20} /></button>
        </div>

        {status === "done" ? (
          <div className="p-10 text-center">
            <CheckCircle2 size={64} className="mx-auto" color="#4E8B5F" />
            <h3 className="mt-4 text-2xl" style={serif}>Pesanan Berhasil Dibuat!</h3>
            <p className="text-gray-500 mt-2 text-sm">Terima kasih, {name}. Pesanan akan dikirim ke {addr}.</p>
            <div className="mt-5 inline-block rounded-lg px-4 py-3 text-sm" style={{ background: "#D9E8D8" }}>
              <div className="text-gray-600 text-xs">Nomor Invoice</div>
              <div className="font-mono font-semibold" style={{ color: G }}>{invoice}</div>
            </div>
            <div className="mt-2 font-bold">{rp(total)}</div>
            <button onClick={onClose} className="mt-6 w-full text-white rounded-lg py-3 font-medium" style={{ background: G }}>Kembali Belanja</button>
          </div>
        ) : items.length === 0 ? (
          <div className="p-10 text-center text-gray-500">Keranjang masih kosong.<button onClick={onClose} className="block mx-auto mt-4 text-white rounded-lg px-5 py-2" style={{ background: G }}>Mulai Belanja</button></div>
        ) : (
          <div className="p-6 space-y-5">
            <div className="space-y-3">
              {items.map(({ p, qty, variant }) => (
                <div key={p.id} className="flex gap-3 items-center">
                  <Img src={p.img} alt={p.name} className="w-16 h-16 rounded-lg object-cover bg-[#F4F4F5]" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{p.name}</div>
                    <select value={variant} onChange={(e) => upd(p.id, { variant: e.target.value })} className="mt-1 text-xs border rounded px-1.5 py-0.5 bg-white">
                      {p.variants.map((v) => <option key={v}>{v}</option>)}
                    </select>
                    <div className="text-xs text-gray-500 mt-1">{rp(p.price)} / item</div>
                  </div>
                  <div className="flex items-center border rounded-lg">
                    <button className="p-1.5" onClick={() => upd(p.id, { qty: qty - 1 })} aria-label="Kurangi"><Minus size={14} /></button>
                    <span className="w-7 text-center text-sm">{qty}</span>
                    <button className="p-1.5" onClick={() => upd(p.id, { qty: qty + 1 })} aria-label="Tambah"><Plus size={14} /></button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Alamat Pengiriman</h4>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Nama penerima" />
              <textarea value={addr} onChange={(e) => setAddr(e.target.value)} rows={2} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Alamat lengkap" />
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Kurir</h4>
              <div className="grid grid-cols-2 gap-2">
                {COURIERS.map((c) => (
                  <button key={c.id} onClick={() => setCourier(c.id)} className="text-left border rounded-lg p-3 text-sm" style={courier === c.id ? { borderColor: G, background: "#D9E8D8" } : {}}>
                    <div className="font-medium">{c.n}</div><div className="text-gray-600">{rp(c.p)}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Metode Pembayaran</h4>
              <div className="grid grid-cols-2 gap-2">
                {PAYS.map((m) => (
                  <button key={m} onClick={() => setPay(m)} className="border rounded-lg py-2 text-sm flex items-center justify-center gap-1" style={pay === m ? { borderColor: G, background: "#D9E8D8" } : {}}>
                    {pay === m && <Check size={14} />}{m}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-3 border rounded-lg p-3 cursor-pointer">
              <input type="checkbox" checked={protect} onChange={(e) => setProtect(e.target.checked)} className="mt-1 accent-[#14362B]" />
              <span className="text-sm flex-1"><b>Proteksi Tambahan</b><br /><span className="text-gray-500 text-xs">Perlindungan kerusakan &amp; kehilangan barang.</span></span>
              <span className="text-sm font-medium">{rp(12500)}</span>
            </label>

            <div className="rounded-xl bg-[#F9FAF9] border p-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Subtotal Produk</span><span>{rp(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Ongkos Kirim</span><span>{ship === 0 ? "Gratis" : rp(ship)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Biaya Layanan / Proteksi</span><span>{rp(fee)}</span></div>
              <div className="flex justify-between items-baseline border-t pt-3"><span className="font-semibold">Total Pembayaran</span><span className="text-2xl font-bold" style={{ color: G }}>{rp(total)}</span></div>
            </div>

            <button onClick={pay_} disabled={status === "loading"} className="w-full text-white rounded-lg py-3.5 font-semibold flex items-center justify-center gap-2 disabled:opacity-80" style={{ background: G }}>
              {status === "loading" ? <><Loader2 className="animate-spin" size={18} />Memproses pembayaran...</> : "Bayar Sekarang"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

