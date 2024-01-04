import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { auth } from '../../firebase';
import { logout } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import HeaderOption from './HeaderOption';

const Header = () => {
    const dispatch = useDispatch();

  const logoutOfApp = () => {
      dispatch(logout());
      auth.signOut();
  }
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
              

            </div>

            <div className="headerRight">  <HeaderOption
                    avatar={true}
                    title="Me"
                    onClick={logoutOfApp}
                /></div>

        </div>
    )
}

export default Header