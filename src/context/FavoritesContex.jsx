import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites')) || []
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const toggleFavorite = (product) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((item) => item.id === product.id)
            if (isFavorite) {
                return prevFavorites.filter((item) => item.id !== product.id)
            }
            return [...prevFavorites, product]
        })
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}
