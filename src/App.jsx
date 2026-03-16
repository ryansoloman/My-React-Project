import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
// import About from "./pages/About"
// import Home from "./pages/Home"
import Sender from "./props/Sender"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="/props" element={<Sender />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
