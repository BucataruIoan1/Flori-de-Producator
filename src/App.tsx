import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home/Home'
import Flowers from '@/pages/Flowers/Flowers'
import Prices from '@/pages/Prices/Prices'
import Contact from '@/pages/Contact/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/florile-noastre" element={<Flowers />} />
        <Route path="/preturi" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
