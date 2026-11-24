import { Monitor, Shirt, Home, Sparkles, Dumbbell, Puzzle, BookOpen, PawPrint } from "lucide-react";
import helm from "./product/helm.webp";

export const G = "#14362B";
export const U = (id, w = 600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PRODUCTS = [
  { id: 1, name: "Noise Cancelling Headphones", cat: "Electronics", price: 299000, old: 399000, disc: 25, rating: 5, reviews: 1234, img: U("photo-1505740420928-5e560c06d30e"), variants: ["Hitam", "Silver", "Navy"] },
  { id: 2, name: "Linen Casual Shirt", cat: "Fashion", price: 189000, old: 249000, disc: 24, rating: 4, reviews: 812, img: U("photo-1596755094514-f87e34085b2c"), variants: ["S", "M", "L", "XL"] },
  { id: 3, name: "Minimalist Niacinamide Serum", cat: "Beauty", price: 129000, old: 159000, disc: 19, rating: 5, reviews: 945, img: U("photo-1620916566398-39f1143ab7be"), variants: ["30 ml", "50 ml"] },
  { id: 4, name: "Compact Coffee Maker", cat: "Home & Living", price: 489000, old: 699000, disc: 30, rating: 4, reviews: 963, img: U("photo-1517668808822-9ebb02f2a0e6"), variants: ["Hitam", "Putih"] },
  { id: 5, name: "Urban Travel Backpack", cat: "Fashion", price: 399000, old: 499000, disc: 20, rating: 5, reviews: 1108, img: U("photo-1553062407-98eeb64c6a62"), variants: ["Hijau Olive", "Hitam", "Abu-abu"] },
  { id: 6, name: "Smartwatch Sport Edition", cat: "Electronics", price: 799000, old: 1099000, disc: 27, rating: 4, reviews: 2210, img: U("photo-1523275335684-37898b6baf30"), variants: ["Hitam", "Rose Gold"] },
  { id: 7, name: "Mechanical Keyboard Wireless", cat: "Electronics", price: 649000, old: 849000, disc: 24, rating: 5, reviews: 654, img: U("photo-1587829741301-dc798b83add3"), variants: ["Blue Switch", "Brown Switch", "Red Switch"] },
  { id: 8, name: "Botanical Scented Candle", cat: "Home & Living", price: 89000, old: 129000, disc: 31, rating: 4, reviews: 421, img: U("photo-1602874801007-bd36c3a7a3a0"), variants: ["Lavender", "Sandalwood", "Vanilla"] },
  { id: 9, name: "Yoga Mat Premium", cat: "Sports", price: 159000, old: 199000, disc: 20, rating: 5, reviews: 378, img: U("photo-1601925260368-ae2f83cf8b7f"), variants: ["Hijau", "Ungu"] },
  { id: 10, name: " RSV SC Hijab Retro Classic half-face", cat: "Toys & Kids", price: 100000, old: 500000, disc: 80, rating: 5, reviews: 289, img: helm.src, variants: ["50 pcs", "100 pcs"] },
];

export const CATS = [
  { n: "Electronics", i: Monitor, bg: "#E3ECF6" }, { n: "Fashion", i: Shirt, bg: "#FBE4DE" },
  { n: "Home & Living", i: Home, bg: "#F6EAD8" }, { n: "Beauty", i: Sparkles, bg: "#F9E1E4" },
  { n: "Sports", i: Dumbbell, bg: "#DDE8F5" }, { n: "Toys & Kids", i: Puzzle, bg: "#F8E6D6" },
  { n: "Books", i: BookOpen, bg: "#EBDDF0" }, { n: "Pet Supplies", i: PawPrint, bg: "#E8E1D6" },
];

export const COURIERS = [{ id: "reg", n: "Reguler (2-4 hari)", p: 15000 }, { id: "ins", n: "Instan (same day)", p: 35000 }];
export const PAYS = ["Virtual Account", "QRIS", "COD", "Kartu Kredit"];
export const rp = (n) => "Rp " + new Intl.NumberFormat("id-ID").format(n);
export const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

