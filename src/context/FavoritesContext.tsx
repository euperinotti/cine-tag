import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

interface FavoritesContextType {
  favorites: any[]
  setFavorites: Dispatch<SetStateAction<any[]>>
}

interface FavoritesProviderProps {
  children: ReactNode
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
)
FavoritesContext.displayName = 'Favorites'

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<any>([])

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
