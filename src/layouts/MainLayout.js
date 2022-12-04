import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import classes from './MainLayout.module.css';

function MainLayout() {
  return (
    <div>
      <MainNavbar />

      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  )
};

export default MainLayout;
