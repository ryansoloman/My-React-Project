import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
// import About from "./pages/About"
// import Home from "./pages/Home"
import Sender from "./props/Sender"
import Counter from "./components/Counter"
import Product from "./components/Product"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/props" element={<Sender />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/products" element={<Product />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
