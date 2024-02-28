import Home from '@/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BaseContainer } from './components/BaseContainer'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Favorites from './pages/Favorites'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <BaseContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BaseContainer>
      <Footer />
    </BrowserRouter>
  )
}
