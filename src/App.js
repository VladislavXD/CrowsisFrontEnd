import './styles/index.css';
import React, { useState } from "react";
import './styles/reset.css'
import Nav from './components/navbar/nav';
import { Routes, Route } from 'react-router-dom';
import ProductShop from './pages/MainPage/ProductShop'
import Favorite from './pages/favorites/favorite';
import SignIn from './pages/signIn/Login';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/authSlice';
import Register from './pages/register/Register';
import './styles/style.media.css'
import LabelBottomNavigation from './components/navbar/BottomNav';




function App() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);


  return (
    <div className="App">

      <Nav setSearchValue={setSearchValue} />
      <LabelBottomNavigation/>
      <Routes>
        <Route path="/" element={<ProductShop searchValue={searchValue} />} />
        <Route path="/singIn" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>

  );
}

export default App;


