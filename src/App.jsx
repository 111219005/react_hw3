// import 'antd/dist/reset.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import Home from "./pages/Home"
import Product from "./pages/Product"

function App() {   
  return (
    <>
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="products">
            <Route path="id/:productId" element={<Product/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App