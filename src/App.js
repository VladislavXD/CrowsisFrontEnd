import "./styles/index.css";
import React, { useState } from "react";
import "./styles/reset.css";
import Nav from "./components/header/Nav";
import { Routes, Route, Link } from "react-router-dom";
import ProductShop from "./pages/MainPage/MainPage";
import Favorite from "./pages/favoritePage/favorite";
import SignIn from "./pages/signIn/Login";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/authSlice";
import Register from "./pages/register/Register";
import "./styles/style.media.css";
import MediaBottomNav from "./components/header/MediaBottomNav";
import BreadcrumbsComponent from "./components/header/Breadcrumb";



function App() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);


  


  return (
    <div className="App">
      <Nav setSearchValue={setSearchValue} />
      <MediaBottomNav />
      <BreadcrumbsComponent />
      <Routes>
        <Route path="/" element={<ProductShop searchValue={searchValue} />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
