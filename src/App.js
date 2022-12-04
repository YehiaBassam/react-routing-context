import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<AllMeetups/>} />
        <Route path='all-meetups' element={<Navigate to='/'/>} />
        {/* <Route path='all-meetups' element={<AllMeetups/>} /> */}
        <Route path='new-meetup' element={<NewMeetup/>} />
        <Route path='favorites' element={<Favorites/>} />
      </Route>
    </Routes>
  );
}

export default App;
