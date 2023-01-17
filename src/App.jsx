import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import CoinDetails from "./pages/CoinDetails"
import Blogs from "./pages/Blogs"
import Trade from "./pages/Trade"
import Learn from "./pages/Learn"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<CoinDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
