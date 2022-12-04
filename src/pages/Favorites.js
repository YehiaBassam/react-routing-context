import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/Favorites-Context";

function Favorites (){
  const favoritectx = useContext(FavoritesContext);
  let content;

  if (favoritectx.totalFavorites){
    content = <MeetupList meetups={favoritectx.favorites} />
  } else {
    content = <h3>You haven't any favorites yet</h3>
  }

  return (
    <>
      <h1>Favorites</h1>
      { content }
    </>
  )
};

export default Favorites;
