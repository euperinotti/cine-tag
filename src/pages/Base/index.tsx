import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { FavoritesProvider } from '@/context/FavoritesContext'
import { Outlet } from 'react-router-dom'

export default function BasePage() {
  return (
    <>
      <Header />
      <FavoritesProvider>
        <Outlet />
      </FavoritesProvider>
      <Footer />
    </>
  )
}
