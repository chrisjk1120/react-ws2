import { useCart } from "./CartContext";


const CartCounter= () => {
  const { cartCount } = useCart();
  return <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">{cartCount}</span>;
};

export default CartCounter;
