import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'
import './App.css'
import Navbar from './components/navbar.tsx'
import filtering from './components/filtering.tsx'
import MainSection from "./components/main.tsx";
import Toast from "./components/toast.tsx";
import Products from "./components/Products.tsx";
import {CartProvider} from "./components/CartContext.tsx";

import Newsletter from "./components/newsletter.tsx";
import Footer from "./components/footer.tsx";
function App() {

  const [cartCount, setCartCount] = useState<number>(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  }
  return (
    <>
<CartProvider>
  <Navbar />

        <Toast />
  <MainSection />
</CartProvider>
      <Newsletter/>
      <Footer />
</>
  )
}

export default App
