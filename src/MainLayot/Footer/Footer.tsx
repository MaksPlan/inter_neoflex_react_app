import React from 'react';
import style from './footer.module.css';

const Footer = () => {
    return (
       
        <footer className={style.footer}>
        <h1 className={style.footer_name}>QPICK</h1>
        <div >
            <ul className={style.footer_nav}>
                <li>Избранное</li>
                <li>Корзина</li>
                <li>Контакты</li>
            </ul>
        </div>
        <div className={style.footer_service}>
            <h2>Условия сервиса</h2>
            <div className={style.lang}>
                <img src="img/lang.svg" alt="" />
                <p className={style.ru}>Рус</p>
                <p className={style.eng}>Eng</p>
            </div>
        </div>
        <div className={style.messanger}>
        <img className={style.icon_massenger} src="img/VK.svg" alt="" />
        <img className={style.icon_massenger}  src="img/Telegram.svg" alt="" />
        <img className={style.icon_massenger}  src="img/Whatsapp.svg" alt="" />
        </div>
    </footer>
    );
};

export default Footer;