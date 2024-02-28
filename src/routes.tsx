import Home from '@/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BaseContainer } from './components/BaseContainer'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Favorites from './pages/Favorites'
import { FavoritesProvider } from './context/FavoritesContext'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <BaseContainer>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoritesProvider>
      </BaseContainer>
      <Footer />
    </BrowserRouter>
  )
}
