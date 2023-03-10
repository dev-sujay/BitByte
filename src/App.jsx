import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import CoinDetails from "./pages/CoinDetails"
import Blogs from "./pages/Blogs"
import Learn from "./pages/Learn"
import Ntf from "./pages/Ntf"
import Footer from "./Components/Footer"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<CoinDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/nft" element={<Ntf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
