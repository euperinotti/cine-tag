import Home from '@/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { FavoritesProvider } from './context/FavoritesContext'
import Favorites from './pages/Favorites'
import Player from './pages/Player'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<Player />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  )
}
