import React, { FC } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import style from './mainlayout.module.css';

interface IProps {
    children: React.ReactNode;
}

const MainLayout:FC<IProps> = ({children}) => {
    return (
        <div className={style.wrapper}>
           <Header /> 
           {children}
           <Footer />
        </div>
    );
};

export default MainLayout;