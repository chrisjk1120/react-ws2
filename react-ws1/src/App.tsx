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
function App() {

  const [cartCount, setCartCount] = useState<number>(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  }
  return (
    <>
<Navbar />
        <Toast />
  <MainSection />
</>
  )
}

export default App
