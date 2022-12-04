import { createContext, useState } from "react";

// Global state
const FavoritesContext = createContext({
  favorites:[],
  totalFavorites: 0,
});

// Context Provider Logic
export function FavoritesContextProvider (props) {
  const [ userFavorites, setUserFavorites ] = useState([]);

  function addFavoriteItem(item){
    setUserFavorites((prevItems) => {
      return prevItems.concat(item)
    })
  }

  function removeFavoriteItem(id){
    setUserFavorites((prevItems) => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  function isFavoriteItem(id){
    return userFavorites.some(item => item.id === id)
  }
  
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteItem,
    removeFavorite: removeFavoriteItem,
    isFavorite: isFavoriteItem,
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext;