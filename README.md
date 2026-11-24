# VIVA — Live Better (Next.js)

Properti toko online untuk video edukasi "hati-hati saat checkout".
Next.js 14 (App Router) + Tailwind CSS + lucide-react.

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Struktur
- `app/page.jsx` — halaman utama (pencarian, kategori, keranjang, wishlist)
- `components/CheckoutModal.jsx` — modal checkout + simulasi pembayaran
- `components/ProductCard.jsx`, `components/ui.jsx` — komponen UI
- `lib/data.js` — produk, kategori, kurir, format Rupiah

Semua data hanya simulasi; tidak ada pembayaran sungguhan.
