import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContex';
import { FiltersProvider } from './context/FiltersContext';
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import ContentAreaPage from './components/ContentAreaPage'

import './styles/commons.css'
import './styles/reset.css'
import './styles/shop-cart-width-768.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <FiltersProvider>
          <CartProvider>
            <FavoritesProvider>
              <Header />
              <ContentAreaPage />
              <Routes>
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Shop />} />
              </Routes>
              <Footer />
            </FavoritesProvider>
          </CartProvider>
        </FiltersProvider>
      </BrowserRouter>
    </>
  )
}

export default App
