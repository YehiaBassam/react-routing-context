import classes from './MeetupItem.module.css';
import Card from "../ui/Card";
import { useContext } from 'react';
import FavoritesContext from '../../store/Favorites-Context';

function MeetupItem(props) {
  const favoritectx = useContext(FavoritesContext);
  const isItemFavorite = favoritectx.isFavorite(props.id);
  
  function toogleFavorite(){
    if (isItemFavorite){
      favoritectx.removeFavorite(props.id);
    } else {
      favoritectx.addFavorite({...props});
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavorite}>
            { isItemFavorite ? "Remove From Favorites" : "To Favorites" }
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
