import React from "react";
import { useAppDispatch, useAppSelector } from "../..";
import { decreaseProduct, deleteProduct, getBasket, increaseProduct } from "../../store/BasketSlice";
import style from "./basketpage.module.css";

const BasketPage = () => {
  const basket = useAppSelector(getBasket);
  const dispatch = useAppDispatch();
  return (
    <div className={style.wrapper}>
      <h1 className={style.header_name}>Корзина</h1>
      {basket.map((product) => {
        return (
          <div className={style.card}>

            <div className={style.leftpart_card}>
               <img src={product.product.img} alt='' className={style.product_img} />
                <div className={style.counter_container}>
            <button
              type='button'
              className={style.counter}
              onClick={() => dispatch(decreaseProduct(product.product))}>
              -
            </button>
            <div className={style.counter_value}>
              {product.count}
              </div>
            <button
              type='button'
              className={style.counter}
              onClick={() => dispatch(increaseProduct(product.product))}>
              +
            </button> 
            </div>
            </div>


            <div className={style.middlepart_card}>
               <h2 className={style.title}>{product.product.title}</h2>
               <div className={style.price_product}>
              
                {product.product.price + 'p'}
               </div>
             </div>

           
           
               <div className={style.rightpart_card}>
                <button type="button" onClick={() => dispatch(deleteProduct(product.product))}>
                  <img src="img/red_dlt.svg" className={style.red_dlt} alt="" />
                </button>
            
            <div className={style.price_product_black}>
          
              {
              product.product.price * product.count + 'p'
              }
            </div>
               </div> 
               </div>
           
        );
      }
      )}
    <div className={style.totalPrice}>
<div className={style.totalPrice_price}>
  <span className={style.total_name}>Итого:</span>
  &#8381;
{basket.reduce((accum, current) => {
  return accum + current.product.price * current.count;
}, 0)}
</div>
<button className={style.order_confirm} type='button' >
Оформить заказ
</button>
    </div>

    </div>
  );
};

export default BasketPage;
