import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavoritesContext from "../store/Favorites-Context";
import classes from './MainNavbar.module.css';

function MainNavbar() {
  const favoritectx = useContext(FavoritesContext);

  return (
  <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink 
            to='/' 
            className={(data) => data.isActive ? "active" : null}>All Meetups
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/new-meetup' 
            className={(data) => data.isActive ? "active" : null}>Add New Meetup
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/favorites' 
            className={(data) => data.isActive ? "active" : null}>
            My Favorites
            <span className={classes.badge}>
              { favoritectx.totalFavorites }
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default MainNavbar