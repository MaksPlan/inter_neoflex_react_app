import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../..";
import { getBasket } from "../../store/BasketSlice";
import style from "./header.module.css";

const Header = () => {
  const basketCounter = useAppSelector(getBasket);
  const counter = basketCounter.length;
  return (
    <header className={style.header}>
      <Link to='/'  style={{ textDecoration: 'none' }}>
        <h1>QPICK</h1>
      </Link>

      <div className={style.icons}>
        <button type='button'>
        <img src="img/heart.svg" alt="" />
         
        </button>
        <Link to='/basket'> 
        <img src="img/trash.svg" alt="" />
       <div>
        {
          <div className={style.full_basket}>{counter}</div>
        }
       </div>
          
        </Link>
      </div>
    </header>
  );
};

export default Header;
