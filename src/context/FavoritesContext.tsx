import { Favorite } from '@/models/Favorites'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

interface FavoritesContextType {
  favorites: Favorite[]
  setFavorites: Dispatch<SetStateAction<Favorite[]>>
}

interface FavoritesProviderProps {
  children: ReactNode
}

export const FavoritesContext = createContext<FavoritesContextType | any>(
  undefined
)
FavoritesContext.displayName = 'Favorites'

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Favorite[]>([])

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
