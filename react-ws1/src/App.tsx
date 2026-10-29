import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'
import './App.css'
import Navbar from './components/navbar.tsx'
import filtering from './components/filtering.tsx'
import MainSection from "./components/main.tsx";
function App() {
  return (
    <>
<Navbar />
  <MainSection />
</>
  )
}

export default App
