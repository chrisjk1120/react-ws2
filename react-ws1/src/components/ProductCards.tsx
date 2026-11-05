import type { ToastMessage, MessageType } from "./toastMessage";
import { useState } from "react";
import { useCart } from "./CartContext";
interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  image: string;
  discount: number;
  onAddToCart?: () => void; // Callback prop
}

const ProductCards = ({
                        title,
                        category,
                        price,
                        image,
                        discount
}: ProductCardProps) => {
  const { addToCart } = useCart();
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const addToast = (message: string, type: MessageType = "success") => {
    const id = crypto.randomUUID();
    const newToast: ToastMessage = { id, type, message };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };


  const add2Cart = (productName: string) => {
    addToast(`${productName} has been successfully added to cart`, "success");
    addToCart();
  };

  return (
    <>
      <article className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
        <div className="relative overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={image}
            alt={title}
            className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              type="button"
              className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
              aria-label="Quick View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            <button
              type="button"
              onClick={() => add2Cart(title)}
              className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
              aria-label="Add to cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </div>

          <span className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-rose-100/50 bg-rose-500/10 text-rose-600 backdrop-blur-md">
            Discount
          </span>

          <button
            type="button"
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
            aria-label="Add to favorites"
            title="Favorite"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
        </div>

        <div className="mt-4 px-1 pb-2 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
              {category}
            </p>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-[10px] font-bold text-slate-400">4.9</span>
            </div>
          </div>
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-[11px] font-medium text-slate-500">In Stock • Ships in 2 days</p>

          <div className="flex items-center justify-between gap-3 pt-3">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 line-through font-medium leading-none">{price} kr</span>
              <span className="text-lg font-black text-slate-900 tracking-tight">{discount} kr</span>
            </div>

            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
              aria-label="Add to cart"
              onClick={() => add2Cart(title)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>

      {/* Floating Toast Notification Container */}
      <div className="fixed bottom-5 right-5 space-y-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="px-4 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCards;
