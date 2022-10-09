import React, { FC } from "react";
import { useAppDispatch } from "../..";
import { IData } from "../../mocked/data";
import { addNewProduct } from "../../store/BasketSlice";
import style from "./cardpage.module.css";

interface IProps {
  data: IData[];
}

const CardPage: FC<IProps> = ({ data }) => {
const dispatch = useAppDispatch()

  return (
    <div>
      <ul className={style.card_wrapper}>
        {data.map((card) => {
          return (
            <li>
              <div className={style.card}>
                <div className={style.img}>
                  <img src={`${card.img}`} alt='' />
                </div>

                <div className={style.flex_space_btwn}>
                  <h2 className={style.card_name}>{card.title}</h2>
                  <h3 className={style.card_price}>{`${card.price}p`}</h3>
                </div>
                <div className={style.flex_space_btwn}>
                  <div className={style.card_rank}>
                    <img src='img/Star.svg' alt='' />
                    <div> {card.rank}</div>
                  </div>
                  <button type='button' className={style.active_btn} onClick={() => dispatch(addNewProduct({product: card, count: 1}))}>Купить</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardPage;
