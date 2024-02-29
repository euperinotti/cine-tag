import Home from '@/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/404'
import BasePage from './pages/Base'
import Favorites from './pages/Favorites'
import Player from './pages/Player'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
