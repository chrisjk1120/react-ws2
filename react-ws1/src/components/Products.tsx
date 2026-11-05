import type { Product } from "./ProductType.ts";
import ProductCards from "./ProductCards.tsx";
import { useState } from "react";
const ProductList = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  }
  const products: Product[] = [
    {
      id: 1,
      title: "test1",
      category: "tech",
      price: 1337,
      discount: 25,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "test1asd",
      category: "tasdech",
      price: 1337,
      discount: 25,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <section className="lg:col-span-9">
    <div id="product-grid" className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCards key={product.id} {...product} onAddToCart={handleAddToCart} />
      ))}
     </div>
      </section>
    </>
  );
};

export default ProductList;
